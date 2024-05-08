import { useQuery } from '@tanstack/react-query'

import { getHolidayInfo } from '@/api/holidays'
import { ONE_DAY } from '@/constant/date'

const useHoliday = (year: number) => {
	const { data } = useQuery({
		queryKey: ['holiday', year],
		queryFn: () => getHolidayInfo(year),
		staleTime: ONE_DAY,
		gcTime: ONE_DAY,
		throwOnError: true,
	})

	return { data }
}
export default useHoliday
