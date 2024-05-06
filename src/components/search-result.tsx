import { useState } from 'react'

import { CalendarDisabledIC, ChevronIC } from '@/assets/icons'
import SearchResultCarousel from '@/components/search-result-carousel'
import { Text } from '@/ui/typography'

export default function SearchResult() {
	return (
		<section>
			<div className='flex py-16pxr'>
				<Text variant='title1'>검색 결과</Text>
			</div>
			<hr />
			{/* TODO data 추가 */}
			{/* {false ? <HolidayInfo /> : <EmptyData />} */}

			<hr />
		</section>
	)
}

function HolidayInfo() {
	const [show, setShow] = useState(false)

	return (
		<>
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
						{/* change hard coding */}
						<Text variant='label2'>242일</Text>
						<Text variant='body1'>(2024.05.11 ~ 2025.08.24)</Text>
					</div>
					<ChevronIC width={24} className='rotate-90' />
				</div>
			</div>

			{/* TODO data 추가 */}
			{show && (
				<div>
					<Text variant='label1'>2023</Text>
					<SearchResultCarousel />
				</div>
			)}
		</>
	)
}

function EmptyData() {
	return (
		<div className='mt-4 grid h-140pxr place-items-center rounded-lg bg-slate-100'>
			<Text variant='body1'>검색 결과가 없습니다.</Text>
		</div>
	)
}
