// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	ssr: true,
	app: {
		baseURL: process.env.NODE_ENV === 'development' ? '/' : '/icon-space-website'
	},
	devServer: {
		port: 23306
	},
	srcDir: './src/',
	runtimeConfig: {},
	appConfig: {
		title: 'Icon Space',
		language: '中文'
	},
	modules: [
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore', 'storeToRefs', 'acceptHMRUpdate']
			}
		],
		'@pinia-plugin-persistedstate/nuxt',
		'nuxt-windicss',
		'@vueuse/nuxt'
	],
	piniaPersistedstate: {
		cookieOptions: {
			sameSite: 'strict'
		},
		storage: 'localStorage'
	},
	typescript: {
		shim: false
	},
	imports: {
		dirs: ['./store']
	},
	windicss: {
		scan: {
			dirs: ['./src/'],
			include: ['**/*.{vue,html,jsx,tsx}'],
			exclude: ['dist', '.git', '.github', '.nuxt']
		}
	},
	plugins: ['@/plugins/arco-design', '@/plugins/icon-space', '@/plugins/color-picker'],
	nitro: {
		prerender: {
			routes: ['/', '/icon-pack']
		}
	}
})
