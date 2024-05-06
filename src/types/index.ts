import { Dispatch, SetStateAction } from 'react'

export interface Holiday {
	date: string
	localName: string
	name: string
}

export type DateRange = { start: Date; end: Date }

export interface BookingData {
	dateRange: {
		start: Date
		end: Date
	}
	holidayData: Holiday[][]
	setDateRange: Dispatch<SetStateAction<DateRange>>
	setHolidayData: Dispatch<SetStateAction<Holiday[][]>>
}
