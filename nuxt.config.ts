// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import configStyleImportPlugin from './plugins/style-import-plugin'

export default defineNuxtConfig({
	srcDir: './src/',
	runtimeConfig: {},
	typescript: {
		shim: false
	},
	modules: ['@pinia/nuxt', 'nuxt-windicss', '@nuxtjs/dayjs'],
	dayjs: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
    defaultTimeZone: 'Asia/Tokyo',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone' // import 'dayjs/plugin/timezone'
    ] // Your Day.js plugin
  },
	imports: {
		dirs: ['./store']
	},
	windicss: {
		scan: {
			dirs: ['./'],
			include: ['**/*.{vue,html,jsx,tsx}']
			// exclude: ['dist', '.git', '.github', '.nuxt']
		}
	},
	pinia: {
		autoImports: ['defineStore', 'acceptHMRUpdate']
	},
	build: {
		transpile: ['@arco-design/web-vue']
	},
	vite: {
		// optimizeDeps: {
		// 	// 添加该行代码
		// 	include: [
		// 		'dayjs/plugin/advancedFormat',
		// 		'dayjs/plugin/quarterOfYear',
		// 		'dayjs/plugin/customParseFormat',
		// 		'dayjs/plugin/isBetween',
		// 		'dayjs/dayjs.min.js'
		// 	],
		// 	// 用于：从预捆绑中排除的依赖项
		// 	exclude: []
		// },
		plugins: [
			AutoImport({
				dts: 'types/auto-import.d.ts',
				include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
				resolvers: [ArcoResolver()]
			}),
			Components({
				dts: 'types/components.d.ts',
				resolvers: [
					ArcoResolver({
						sideEffect: true
					})
				]
			}),
			configStyleImportPlugin()
		]
	}
})
