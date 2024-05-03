import path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
			{ find: '@/assets', replacement: path.resolve(__dirname, 'src/assets') },
			{ find: '@/components', replacement: path.resolve(__dirname, 'src/components') },
			{ find: '@/ui', replacement: path.resolve(__dirname, 'src/ui') },
			{ find: '@/utils', replacement: path.resolve(__dirname, 'src/utils') },
			{
				find: 'class-variance-authority/types',
				replacement: path.resolve(__dirname, './node_modules/class-variance-authority/dist/types.d.ts'),
			},
		],
	},
})
