import { UseQueryResult, useQueries } from '@tanstack/react-query'
import { useCallback } from 'react'

import { getHolidayInfo } from '@/api/holidays'
import { ONE_DAY } from '@/constant/date'
import { Holiday } from '@/types'
import { filterDate } from '@/utils/date'

interface UseHolidayProps {
	years: number[]
	dateRange: { start: Date; end: Date }
	enabled?: boolean
}
const useHolidayList = ({ years, dateRange, enabled = false }: UseHolidayProps) => {
	const combineQueries = useCallback(
		(results: UseQueryResult<Holiday[], Error>[]) => {
			return {
				data: results.reduce((acc: Holiday[][], curr) => {
					const filteredHolidays = curr.data?.filter((item) => filterDate(item.date, dateRange))
					if (filteredHolidays) {
						acc.push(filteredHolidays)
					}
					return acc
				}, []),
			}
		},
		[dateRange],
	)

	const { data } = useQueries({
		queries: years.map((year) => ({
			queryKey: ['holiday', year],
			queryFn: () => getHolidayInfo(year),
			enabled,
			staleTime: ONE_DAY,
			gcTime: ONE_DAY,
		})),
		combine: combineQueries,
	})

	return { data }
}
export default useHolidayList
