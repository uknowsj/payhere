import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ReactNode } from 'react'

import ErrorBoundary from '@/components/shared/error-boundary'
import ErrorFallback from '@/components/shared/error-boundary/fallback'

interface EerrorBoundaryLayoutProps {
	children: ReactNode
}
export default function ErrorBoundaryLayout({ children }: EerrorBoundaryLayoutProps) {
	return (
		<QueryErrorResetBoundary>
			{({ reset }) => (
				<ErrorBoundary
					fallback={({ resetErrorBoundary }) => {
						return <ErrorFallback onResetErrorBoundary={resetErrorBoundary} />
					}}
					onReset={reset}
				>
					{children}
				</ErrorBoundary>
			)}
		</QueryErrorResetBoundary>
	)
}
