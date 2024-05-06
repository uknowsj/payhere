import { useQuery } from '@tanstack/react-query'

import { getHolidayInfo } from '@/api/holidays'
import { ONE_DAY } from '@/constant/date'

const useHoliday = (date: Date) => {
	const { data } = useQuery({
		queryKey: ['holiday', date.getFullYear()],
		queryFn: () => getHolidayInfo(date.getFullYear()),
		staleTime: ONE_DAY,
		gcTime: ONE_DAY,
	})

	return { data }
}
export default useHoliday
