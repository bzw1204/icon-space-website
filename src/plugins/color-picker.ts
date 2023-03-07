import ColorPicker from 'colorpicker-v3'
import 'colorpicker-v3/style.css'
import '@/assets/css/index.css'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(ColorPicker)
})
