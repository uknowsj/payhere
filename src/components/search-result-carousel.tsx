import dayjs from 'dayjs'

import { Text } from '@/components/shared/typography'
import { Holiday } from '@/types'

interface SearchResultCarouselProps {
	data: Holiday[]
}
export default function SearchResultCarousel({ data }: SearchResultCarouselProps) {
	return (
		<div className='overflow-scroll'>
			<div className='flex gap-2'>
				{data.map(({ date, localName }) => (
					<div
						key={`${date}-${localName}`}
						className='grid size-120pxr shrink-0 place-items-center rounded-md bg-gray-100 py-4'
					>
						<Text variant='body2'>{localName}</Text>
						<Text variant='body2'>{dayjs(date).format('MM.DD')}</Text>
					</div>
				))}
			</div>
		</div>
	)
}
