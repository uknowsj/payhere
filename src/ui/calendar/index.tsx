import { useRef, useState } from 'react'
import Calendar from 'react-calendar'

import { ChevronIC, ChevronFilledIC } from '@/assets/icons'

import 'react-calendar/dist/Calendar.css'
import './calendar.css'

import { MAX_DATE } from '@/constant/date'
import { useOutsideClick } from '@/hooks/use-outside-click'
import { cn } from '@/utils/style'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]
interface DatePickerProps {
	isOpen?: boolean
	onChange: (date: Date) => void
	onClose: () => void
	defaultDate?: Date
}
export default function CalendarModal({ isOpen, onChange, onClose, defaultDate }: DatePickerProps) {
	const [date, setDate] = useState<Value>(defaultDate ?? new Date())
	const datePickerRef = useRef<HTMLDivElement>(null)

	useOutsideClick({ ref: datePickerRef, handler: onClose })

	const changeDate = (value: Value) => {
		if (!value) return onClose()
		if (value instanceof Date) {
			setDate(value)
			onChange(value)
			onClose()
		}
	}

	return (
		<div className={cn('absolute top-full mt-16pxr overflow-hidden rounded-2xl', isOpen ? 'block' : 'hidden')}>
			<main ref={datePickerRef} className='relative z-10'>
				<Calendar
					calendarType='gregory'
					prevLabel={<LabelIcon Icon={ChevronIC} dir='left' />}
					prev2Label={<LabelIcon Icon={ChevronFilledIC} dir='left' />}
					nextLabel={<LabelIcon Icon={ChevronIC} />}
					next2Label={<LabelIcon Icon={ChevronFilledIC} />}
					formatDay={(_, date) => date.getDate().toString()}
					showNeighboringMonth={false}
					onChange={changeDate}
					value={date}
					maxDate={new Date(MAX_DATE)}
				/>
			</main>
			<div className='fixed inset-0 z-0 bg-[#00000070]' />
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
