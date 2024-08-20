import { defineConfig, transformWithEsbuild, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		{
			name: 'treat-js-files-as-jsx',
			async transform(code, id) {
				if (!id.match(/src\/.*\.js$/)) return null;

				// Use the exposed transform from vite, instead of directly
				// transforming with esbuild
				return transformWithEsbuild(code, id, {
					loader: 'jsx',
					jsx: 'automatic',
				});
			},
		},
		react(),
		splitVendorChunkPlugin(),
	],
	optimizeDeps: {
		force: true,
		esbuildOptions: {
			loader: {
				'.js': 'jsx',
			},
		},
	},
	server: {
		port: 3000,
	},
	build: {
		sourcemap: true,
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './tests/setup.js',
	},
});
