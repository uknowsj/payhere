import dayjs from 'dayjs'

import { DateRange } from '@/types'

type FilterDate = (targetDate: string | Date, dateRange: DateRange) => boolean
/**
 * 기간 내에 타겟 날짜가 포함되는지 여부
 * @param targetDate { string | Date } 타겟 날짜
 * @param dateRange { DateRange } 조회 기간
 * @returns boolean
 */
export const filterDate: FilterDate = (targetDate, { start, end }) => {
	if (typeof targetDate === 'string') {
		targetDate = dayjs(targetDate).toDate()
	}
	return start <= targetDate && targetDate <= end
}

/**
 * 기간 내 연도 추출
 */
export const extractYears = ({ start, end }: DateRange) => {
	const startYear = dayjs(start).year()
	const endYear = dayjs(end).year()

	return Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index)
}

export const formatDate = (date: Date) => dayjs(date).format('YYYY-MM-DD')

export const isSameDay = (date1: Date | string, date2: Date | string) => dayjs(date1).isSame(dayjs(date2))

/**
 * 두 개의 연도 배열이 동일한지 비교
 */
export const isSameYearArray = (years1: number[], years2: number[]) => JSON.stringify(years1) !== JSON.stringify(years2)
