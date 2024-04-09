import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		// Only for development use
		// proxy: {
		// 	'/api': {
		// 		target: 'http://127.0.0.1:5212',
		// 		changeOrigin: true,
		// 		secure: false
		// 	}
		// }
	}
});
