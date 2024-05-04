import { ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
}
export default function Layout({ children }: LayoutProps) {
	return <div className='mx-auto max-w-4xl bg-white px-40pxr'>{children}</div>
}
