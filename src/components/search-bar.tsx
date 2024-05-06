import { useEffect, useState } from 'react'

import DatePicker from '@/components/date-picker'
import Button from '@/components/shared/button'
import { Text } from '@/components/shared/typography'
import useHolidayList from '@/hooks/use-holiday-list'
import { BookingData } from '@/types'
import { extractYears, isSameYearArray, validateDate } from '@/utils/date'

interface SearchBarProps extends Omit<BookingData, 'holidayData'> {
	setSearchedDateRange: BookingData['setDateRange']
}
export default function SearchBar({ dateRange, setDateRange, setHolidayData, setSearchedDateRange }: SearchBarProps) {
	const [dateParam, setDateParam] = useState<BookingData['dateRange']>(dateRange)
	const [years, setYears] = useState<number[]>([])
	const [enabled, setEnabled] = useState(false)
	const [dateError, setDateError] = useState<string | null>('')

	const { data } = useHolidayList({ years, dateRange: dateParam, enabled })

	useEffect(() => {
		setHolidayData(data)
	}, [data])

	const searchHoliday = () => {
		const newYears = extractYears(dateRange)
		if (isSameYearArray(years, newYears)) {
			setYears(newYears)
		}

		setDateParam(dateRange)
		setSearchedDateRange(dateRange)
		setEnabled(true)
	}

	const changeStartDate = (date: Date) => {
		const errorMessage = validateDate(date, dateRange.end)
		setDateError(errorMessage)
		setDateRange((prev) => ({ ...prev, start: date }))
	}

	const changeEndDate = (date: Date) => {
		const errorMessage = validateDate(dateRange.start, date)
		setDateError(errorMessage)
		setDateRange((prev) => ({ ...prev, end: date }))
	}

	return (
		<div className='z-10 flex h-100pxr items-center rounded-lg bg-white px-20pxr'>
			<div className='flex flex-1'>
				<DatePicker type='start' date={dateRange.start} onChangeDate={changeStartDate} />
				<Text variant='label2' className='w-100pxr text-center'>
					~
				</Text>
				<DatePicker type='end' date={dateRange.end} onChangeDate={changeEndDate} />
			</div>
			<div>
				<Button size='lg' className='w-128pxr' isDisabled={Boolean(dateError)} onClick={searchHoliday}>
					검색
				</Button>
				<Text variant='body3' className='absolute bottom-6pxr right-20pxr w-max text-red-500'>
					{dateError}
				</Text>
			</div>
		</div>
	)
}
