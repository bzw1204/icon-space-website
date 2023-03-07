export type Theme = 'outline' | 'filled' | 'two-tone' | 'multi-color'
export interface IconSpaceProps {
	strokeWidth: number
	size: number
	theme: Theme
	colors: string | string[]
	strokeLinejoin: string
	strokeLinecap: string
}

export const useSvgStore = defineStore('app', {
	state: (): IconSpaceProps => ({
		strokeWidth: 2,
		size: 24,
		theme: 'multi-color',
		colors: ['#666', '#2F88FF', '#FFF', '#43CCF8'],
		strokeLinejoin: 'miter',
		strokeLinecap: 'square'
	})
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useSvgStore, import.meta.hot))
}
