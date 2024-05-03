import { cx } from 'class-variance-authority'
import type { ClassValue } from 'class-variance-authority/types'
import { twMerge } from 'tailwind-merge'

// 깔끔한 import를 위해 cva 모듈도 style util 파일에서 함께 관리
export * from 'class-variance-authority'
export * from 'class-variance-authority/types'

export const cn = (...args: ClassValue[]) => twMerge(cx(args))

/**
 * object에서 keys에 해당하는 props 제외
 * @param obj
 * @param keys
 * @returns T[]
 */
export const omitProps = <T>(obj: Record<string, T>, keys: string[]): T[] => {
	return Object.entries(obj).reduce((acc: T[], [key, value]) => {
		if (!keys.includes(key)) acc.push(value)
		return acc
	}, [])
}
