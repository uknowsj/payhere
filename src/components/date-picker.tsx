import dayjs from 'dayjs'

import { CalendarNormalIC } from '@/assets/icons'
import CalendarModal from '@/components/shared/calendar'
import { Text } from '@/components/shared/typography'
import useDisclosure from '@/hooks/use-disclosure'

interface DatePickerProps {
	type: 'start' | 'end'
	date: Date
	onChangeDate: (date: Date) => void
	className?: string
}
export default function DatePicker({ type, date, onChangeDate }: DatePickerProps) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<div>
			<div className='flex cursor-pointer items-center' onClick={() => (isOpen ? onClose() : onOpen())}>
				<CalendarNormalIC width={20} height={20} />
				<Text variant='title3' className='ml-4'>
					{type === 'start' ? '시작일' : '종료일'}
				</Text>
				<Text variant='label2' className='ml-4'>
					{dayjs(date).format('YYYY-MM-DD')}
				</Text>
			</div>
			<CalendarModal isOpen={isOpen} defaultDate={date} onClose={onClose} onChange={onChangeDate} />
		</div>
	)
}
