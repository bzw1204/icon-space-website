// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
	devServer:{
		port: 23306
	},
	srcDir: './src/',
	runtimeConfig: {},
	typescript: {
		shim: false
	},
	modules: ['@pinia/nuxt', 'nuxt-windicss'],
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
	plugins: ['@/plugins/arco-design'],
	pinia: {
		autoImports: ['defineStore', 'acceptHMRUpdate']
	},
	vite: {
		plugins: [
			AutoImport({
				dts: 'types/auto-import.d.ts',
				include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
				resolvers: [ArcoResolver()]
			}),
			Components({
				dts: 'types/components.d.ts',
				resolvers: []
			})
		]
	}
})
