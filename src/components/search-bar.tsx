import DatePicker from '@/components/date-picker'
import Button from '@/ui/button'

export default function SearchBar() {
	return (
		<div className='flex h-89pxr items-center rounded-lg bg-white px-20pxr'>
			<DatePicker label='시작일' className='flex-1' />
			<DatePicker label='종료일' className='flex-1' />
			<Button size='lg' className='w-128pxr'>
				검색
			</Button>
		</div>
	)
}
