declare module '*.svg' {
	const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>
	export default value
}

type SVGComponent = React.FunctionComponent<React.SVGAttributes<SVGElement>>
