import Header from '@/components/header'
import Layout from '@/components/layout'
import SearchBar from '@/components/search-bar'
import { Text } from '@/ui/typography'

function App() {
	return (
		<Layout>
			<Header />
			{/* 날짜 선택 */}
			<section>
				<div className='flex py-16pxr'>
					<Text variant='label1'>조회하실 날짜를 지정해주세요</Text>
				</div>
				<div className='relative mt-8pxr flex h-118pxr flex-col justify-center'>
					{/* TODO 색지정 */}
					<div className='absolute left-1/2 z-0 h-full w-screen -translate-x-1/2 bg-[#60A5FA]' />
					<div className='relative'>
						<SearchBar />
					</div>
				</div>
			</section>

			{/* 검색 결과 */}
			<section>
				<div className='flex py-16pxr'>
					<Text variant='title1'>검색 결과</Text>
				</div>
				<hr />
				<div className='flex'>
					<div className=''>
						{/* icon */}
						<img src='' alt='예약 가능 달력 아이콘' />
						<p>예약 가능 일 수</p>
					</div>
					<div className='ml-36pxr flex flex-1'>
						<p>242일</p>
					</div>
				</div>
				<div className='flex'>
					<div className='cursor-pointer'>
						{/* icon */}
						<img src='' alt='공휴일 달력 아이콘' />
						<p>전체 공휴일 수</p>
						<button>더보기</button>
					</div>
					<div className='ml-36pxr flex flex-1'>
						<p className='cursor-pointer'>242일</p>
					</div>
				</div>
			</section>

			{/* 공휴일 상세보기 */}
			{/* 연도별 공휴일 리스트 받아서 최대 3개 보여주기 */}
		</Layout>
	)
}

export default App
