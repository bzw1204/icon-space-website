import { install } from '@icon-space/vue-next/es/all'

export default defineNuxtPlugin((nuxtApp) => {
	install(nuxtApp.vueApp, 'i')
})
