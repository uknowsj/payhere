import React from 'react'

import { textVariants } from '@/components/shared/typography/style.css'
import { AsElementProps } from '@/components/shared/typography/types'
import { cn, omitProps } from '@/utils/style'

export interface TextProps extends AsElementProps {
	variant: 'heading1' | 'title1' | 'title2' | 'title3' | 'body1' | 'body2' | 'body3' | 'label1' | 'label2' | 'label3'
}
function Text(props: TextProps, ref: React.Ref<HTMLElement>) {
	const { className, variant, children, ...args } = props
	const as = props.as ?? textVariants[variant]?.as ?? 'p'
	const textUtilities = omitProps(textVariants[variant], ['as']).join(' ')

	return React.createElement(
		as,
		{
			...args,
			ref,
			className: cn(textUtilities, className),
		},
		children,
	)
}

const _Text = React.forwardRef(Text)
export { _Text as Text }
