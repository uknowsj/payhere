import dayjs from 'dayjs'
import { useState } from 'react'

import Header from '@/components/header'
import Layout from '@/components/layout'
import SearchBar from '@/components/search-bar'
import SearchResult from '@/components/search-result'
import ErrorBoundaryLayout from '@/components/shared/error-boundary/layout'
import { Text } from '@/components/shared/typography'
import { MAX_DATE } from '@/constant/date'
import { Holiday } from '@/types'

const initDate = () => {
	const startDate = dayjs().toDate()
	const nextMonthDate = dayjs().add(1, 'month')
	const endDate = nextMonthDate.isAfter(dayjs(MAX_DATE)) ? dayjs(MAX_DATE) : nextMonthDate
	return { start: startDate, end: endDate.toDate() }
}

function App() {
	const [dateRange, setDateRange] = useState(() => initDate())
	const [searchedDateRange, setSearchedDateRange] = useState(() => initDate())
	const [holidayData, setHolidayData] = useState<Holiday[][]>([])

	return (
		<Layout>
			<Header />
			<ErrorBoundaryLayout>
				<section aria-label='조회 날짜 선택'>
					<div className='flex py-16pxr'>
						<Text variant='label2'>조회하실 날짜를 지정해주세요</Text>
					</div>
					<div className='relative mt-8pxr flex h-132pxr flex-col justify-center'>
						<div className='bg-primary100 absolute left-1/2 z-0 h-full w-screen -translate-x-1/2' />
						<div className='relative'>
							<SearchBar
								dateRange={dateRange}
								setDateRange={setDateRange}
								setHolidayData={setHolidayData}
								setSearchedDateRange={setSearchedDateRange}
							/>
						</div>
					</div>
				</section>
				<SearchResult dateRange={searchedDateRange} holidayData={holidayData} />
			</ErrorBoundaryLayout>
		</Layout>
	)
}

export default App
