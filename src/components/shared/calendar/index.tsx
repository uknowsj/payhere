import { Value } from 'node_modules/react-calendar/dist/cjs/shared/types'
import { useRef, useState } from 'react'
import Calendar, { TileClassNameFunc } from 'react-calendar'

import 'react-calendar/dist/Calendar.css'
import './calendar.css'

import { ChevronIC, ChevronFilledIC } from '@/assets/icons'
import { MAX_DATE } from '@/constant/date'
import useHoliday from '@/hooks/use-holiday'
import { useOutsideClick } from '@/hooks/use-outside-click'
import { isSameDay } from '@/utils/date'
import { cn } from '@/utils/style'

interface DatePickerProps {
	isOpen?: boolean
	onChange: (date: Date) => void
	onClose: () => void
	defaultDate?: Date
}
export default function CalendarModal({ isOpen, onChange, onClose, defaultDate }: DatePickerProps) {
	const [date, setDate] = useState<Date>(defaultDate ?? new Date())
	const datePickerRef = useRef<HTMLDivElement>(null)

	const { data } = useHoliday(date)
	useOutsideClick({ ref: datePickerRef, handler: onClose })

	const changeDate = (value: Value) => {
		if (!value) return onClose()
		if (value instanceof Date) {
			setDate(value)
			onChange(value)
			onClose()
		}
	}

	// 한국 공휴일 표시
	const changeTileContent: TileClassNameFunc = ({ date, view }) => {
		if (view === 'month') {
			if (data?.find((item) => isSameDay(item.date, date))) {
				return 'text-red-500'
			}
		}
	}

	return (
		<div className={cn('absolute top-full mt-16pxr overflow-hidden rounded-2xl', isOpen ? 'block' : 'hidden')}>
			<main ref={datePickerRef} className='relative z-10'>
				<Calendar
					locale='ko'
					calendarType='gregory'
					value={date}
					maxDate={new Date(MAX_DATE)}
					prevLabel={<LabelIcon Icon={ChevronIC} dir='left' />}
					prev2Label={<LabelIcon Icon={ChevronFilledIC} dir='left' />}
					nextLabel={<LabelIcon Icon={ChevronIC} />}
					next2Label={<LabelIcon Icon={ChevronFilledIC} />}
					formatDay={(_, date) => date.getDate().toString()}
					tileClassName={changeTileContent}
					showNeighboringMonth={false}
					onChange={changeDate}
				/>
			</main>
			<div className='fixed inset-0 z-[1] bg-[#00000070]' />
		</div>
	)
}

interface LabelIconProps {
	Icon: SVGComponent
	dir?: 'left' | 'right'
}
function LabelIcon({ Icon, dir = 'right' }: LabelIconProps) {
	return (
		<div className='flex items-center justify-center'>
			<Icon style={{ width: 24, transform: dir === 'left' ? 'rotate(180deg)' : 'none' }} />
		</div>
	)
}
