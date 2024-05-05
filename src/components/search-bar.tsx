import { useContext } from 'react'

import DatePicker from '@/components/date-picker'
import DateContext from '@/context/date-context'
import Button from '@/ui/button'

export default function SearchBar() {
	const { date, setDate } = useContext(DateContext)
	const searchHoliday = () => {}

	const changeStartDate = (date: Date) => setDate((prev) => ({ ...prev, start: date }))
	const changeEndDate = (date: Date) => setDate((prev) => ({ ...prev, end: date }))

	return (
		<div className='flex h-89pxr items-center rounded-lg bg-white px-20pxr'>
			<DatePicker type='start' date={date.start} onChangeDate={changeStartDate} className='flex-1' />
			<DatePicker type='end' date={date.end} onChangeDate={changeEndDate} className='flex-1' />
			<Button size='lg' className='w-128pxr' onClick={searchHoliday}>
				검색
			</Button>
		</div>
	)
}
