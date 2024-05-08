import { ErrorFilledIC } from '@/assets/icons'
import Button from '@/components/shared/button'
import { Text } from '@/components/shared/typography'

interface ErrorFallbackProps {
	onResetErrorBoundary: () => void
}
export default function ErrorFallback({ onResetErrorBoundary }: ErrorFallbackProps) {
	return (
		<div className='flex h-[380px] w-full flex-col items-center justify-center rounded-lg bg-gray-100'>
			<ErrorFilledIC />
			<div className='mt-4 text-center'>
				<Text variant='body1'>에러가 발생했습니다.</Text>
				<Text variant='body1'>잠시 후 다시 시도해 주세요</Text>
			</div>
			<Button className='bg-negative mt-8' onClick={onResetErrorBoundary}>
				다시 시도하기
			</Button>
		</div>
	)
}
