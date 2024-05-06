import { ReactNode, useLayoutEffect, useState } from 'react'

import { CalendarDisabledIC, ChevronIC } from '@/assets/icons'
import SearchResultCarousel from '@/components/search-result-carousel'
import { Text } from '@/components/shared/typography'
import { BookingData } from '@/types'
import { extractYears, formatDate } from '@/utils/date'
import { cn } from '@/utils/style'

interface SearchResultProps extends Pick<BookingData, 'holidayData' | 'dateRange'> {}
export default function SearchResult({ holidayData, dateRange }: SearchResultProps) {
	const [show, setShow] = useState(false)
	const [holidayCnt, setHolidayCnt] = useState(0)

	useLayoutEffect(() => {
		if (holidayData.length) {
			setHolidayCnt(holidayData.reduce((sum, curr) => sum + curr.length, 0))
		}
	}, [holidayData])

	if (!holidayData.length) {
		return (
			<SearchResultLayout>
				<EmptyData />
			</SearchResultLayout>
		)
	}

	return (
		<SearchResultLayout>
			<div className='flex p-4'>
				<div className='flex gap-2'>
					<CalendarDisabledIC />
					<Text variant='label2'>전체 공휴일 수</Text>
				</div>
				<div
					className='ml-36pxr flex flex-1 cursor-pointer justify-between'
					onClick={() => setShow((prev) => !prev)}
				>
					<div className='flex items-center gap-2'>
						<Text variant='label2'>{holidayCnt} 일</Text>
						<Text variant='body1'>
							({formatDate(dateRange.start)} ~ {formatDate(dateRange.end)})
						</Text>
					</div>
					<ChevronIC width={24} className={cn('duration-150 ease-in', show ? '-rotate-90' : 'rotate-90')} />
				</div>
			</div>

			{show && (
				<div>
					{holidayData.map((item, index) => (
						<div key={index} className='mt-24pxr'>
							<div className='mb-8pxr'>
								<Text variant='label2'>{extractYears(dateRange)[index]}</Text>
							</div>
							<SearchResultCarousel data={item} />
						</div>
					))}
				</div>
			)}
		</SearchResultLayout>
	)
}

interface SearchResultLayout {
	children: ReactNode
}
function SearchResultLayout({ children }: SearchResultLayout) {
	return (
		<section aria-label='검색 결과'>
			<div className='flex py-16pxr'>
				<Text variant='title2'>검색 결과</Text>
			</div>
			<hr />
			<div className='my-4'>{children}</div>
			<hr />
		</section>
	)
}

function EmptyData() {
	return (
		<div className='grid h-140pxr place-items-center rounded-lg bg-slate-100'>
			<Text variant='body2'>검색 결과가 없습니다.</Text>
		</div>
	)
}
