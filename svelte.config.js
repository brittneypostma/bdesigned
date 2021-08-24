import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'
import path from 'path'

const config = {
	kit: {
		adapter: adapter({}),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'@components': path.resolve('./src/lib/components'),
					'@lib': path.resolve('./src/lib'),
					'@utils': path.resolve('./src/lib/utils'),
					'@posts': path.resolve('./src/posts'),
					'@hooks': path.resolve('./src/lib/hooks'),
					'@api': path.resolve('./src/lib/api'),
					'@styles': path.resolve('./src/lib/styles'),
					'@stores': path.resolve('./src/lib/stores'),
					'@actions': path.resolve('./src/lib/actions')
				}
			}
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
}

export default config
