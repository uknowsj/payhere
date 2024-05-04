import { cn } from '@/utils/style'
import './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'solid' | 'outline'
	size?: 'sm' | 'md' | 'lg'
	isDisabled?: boolean
}

export default function Button(props: ButtonProps) {
	const { variant = 'solid', size = 'md', isDisabled, className, children } = props

	return (
		<button disabled={isDisabled} className={cn(`default-button ${variant} ${size}`, className)}>
			<span>{children}</span>
		</button>
	)
}
