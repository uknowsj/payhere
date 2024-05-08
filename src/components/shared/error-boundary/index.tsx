import { Component, ComponentType, ErrorInfo, ReactNode, createElement } from 'react'

interface FallbackProps {
	resetErrorBoundary: () => void
}
interface ErrorBoundaryProps {
	fallback: ComponentType<FallbackProps>
	children: ReactNode
	onReset: () => void
}
interface ErrorBoundaryState {
	hasError: boolean
	error: Error | null
}
const initialState: ErrorBoundaryState = {
	hasError: false,
	error: null,
}
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	state = initialState

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return {
			hasError: true,
			error,
		}
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error({ error, errorInfo })
	}

	resetErrorBoundary = () => {
		this.props.onReset()
		this.setState(initialState)
	}

	render() {
		const { state, props, resetErrorBoundary } = this
		const { hasError } = state
		const { fallback, children } = props

		const fallbackComponent = createElement(fallback, { resetErrorBoundary })
		return hasError ? fallbackComponent : children
	}
}
