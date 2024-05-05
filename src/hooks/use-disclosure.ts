import { useCallback, useState } from 'react'

interface UseDatePickerProps {
	open?: boolean
	defaultOpen?: boolean
	onClose?(): void
	onOpen?(): void
}

export default function useDisclosure(props: UseDatePickerProps = {}) {
	const { onClose: onCloseProp, onOpen: onOpenProp, open: openProp } = props

	const [openState, setOpen] = useState(props.defaultOpen || false)

	const isOpen = openProp ?? openState
	const isControlled = openProp !== undefined

	const onOpen = useCallback(() => {
		if (!isControlled) {
			setOpen(true)
		}
		// check
		if (onOpenProp) {
			onOpenProp()
		}
	}, [isControlled, onOpenProp])

	const onClose = useCallback(() => {
		if (!isControlled) {
			setOpen(false)
		}
		// check
		if (onCloseProp) {
			onCloseProp()
		}
	}, [isControlled, onCloseProp])

	return {
		isOpen,
		onOpen,
		onClose,
		isControlled,
	}
}
