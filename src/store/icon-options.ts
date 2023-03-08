import { IIconConfig } from '@icon-space/vue-next/lib/runtime'

type IOptionProps = IIconConfig & { size: number }

const defaultOptionProps: IOptionProps = {
	size: 12,
	strokeWidth: 4,
	theme: 'outline',
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
	colors: {
		outline: {
			fill: '#333',
			background: 'transparent'
		},
		filled: {
			fill: '#333',
			background: '#FFF'
		},
		twoTone: {
			fill: '#333',
			twoTone: '#2F88FF'
		},
		multiColor: {
			outStrokeColor: '#333',
			outFillColor: '#2F88FF',
			innerStrokeColor: '#FFF',
			innerFillColor: '#43CCF8'
		}
	},
	rtl: false,
	prefix: 'i'
}

export const useIconOptionStore = defineStore('icon-option', {
	state: (): IOptionProps => ({
		size: defaultOptionProps.size,
		strokeWidth: defaultOptionProps.strokeWidth,
		theme: defaultOptionProps.theme,
		strokeLinecap: defaultOptionProps.strokeLinecap,
		strokeLinejoin: defaultOptionProps.strokeLinejoin,
		colors: {
			outline: {
				fill: defaultOptionProps.colors.outline.fill,
				background: defaultOptionProps.colors.outline.background
			},
			filled: {
				fill: defaultOptionProps.colors.filled.fill,
				background: defaultOptionProps.colors.filled.background
			},
			twoTone: {
				fill: defaultOptionProps.colors.twoTone.fill,
				twoTone: defaultOptionProps.colors.twoTone.twoTone
			},
			multiColor: {
				outStrokeColor: defaultOptionProps.colors.multiColor.outStrokeColor,
				outFillColor: defaultOptionProps.colors.multiColor.outFillColor,
				innerStrokeColor: defaultOptionProps.colors.multiColor.innerStrokeColor,
				innerFillColor: defaultOptionProps.colors.multiColor.innerFillColor
			}
		},
		rtl: defaultOptionProps.rtl,
		prefix: defaultOptionProps.prefix
	}),
	persist: true,
	getters: {}
})
