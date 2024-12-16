import { defineConfig, transformWithEsbuild, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
// import { ViteMinifyPlugin } from 'vite-plugin-minify';
// import { terser } from 'rollup-plugin-terser';

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
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
		splitVendorChunkPlugin(),
		// ViteMinifyPlugin(),
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
		// minify: 'esbuild',
		cssMinify: true,
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './tests/setup.js',
	},
});
