module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'plugin:unocss/recommended',
		'plugin:tailwindcss/recommended',
		'plugin:@tanstack/eslint-plugin-query/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'import'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-explicit-any': 'warn',
		'unocss/classnames-order': 'off',
		'import/order': [
			'warn',
			{
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
	},
}
