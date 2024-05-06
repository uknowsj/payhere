import dayjs from 'dayjs'

import { CalendarNormalIC } from '@/assets/icons'
import useDisclosure from '@/hooks/use-disclosure'
import CalendarModal from '@/ui/calendar'
import { Text } from '@/ui/typography'
import { cn } from '@/utils/style'

interface DatePickerProps {
	type: 'start' | 'end'
	date: Date
	onChangeDate: (date: Date) => void
	className?: string
}
export default function DatePicker({ type, date, onChangeDate, className }: DatePickerProps) {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<div className={cn('flex', className)}>
			<div className='flex cursor-pointer items-center' onClick={() => (isOpen ? onClose() : onOpen())}>
				<CalendarNormalIC width={24} height={24} />
				<Text variant='title2' className='ml-4'>
					{type === 'start' ? '시작일' : '종료일'}
				</Text>
				<Text variant='label1' className='ml-4'>
					{dayjs(date).format('YYYY-MM-DD')}
				</Text>
			</div>
			<CalendarModal isOpen={isOpen} defaultDate={date} onClose={onClose} onChange={onChangeDate} />
		</div>
	)
}
