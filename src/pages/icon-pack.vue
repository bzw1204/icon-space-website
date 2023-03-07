<template>
	<div class="abc w-full h-full flex justify-between">
		<div class="icon-nav w-150px h-[calc(100vh_-_60px] overflow-auto">
			<a-scrollbar class="h-[calc(100vh_-_60px)] overflow-auto">
				<a-anchor fix line-less :change-hash="false" @select="handleSelect">
					<a-anchor-link v-for="item in Object.keys(iconList) || []" :key="item" :href="`#${item}`">
						{{ item }}
					</a-anchor-link>
				</a-anchor>
			</a-scrollbar>
		</div>
		<div class="icon-content w-[calc(100%_-_450px)] h-[calc(100vh_-_60px)] max-h-[calc(100vh_-_60px)] px-10px">
			<a-page-header class="bg-[var(--color-bg-2)]" :title="categoryCN" :show-back="false">
				<template #extra>
					<a-tag size="small" color="cyan">共： {{ count }}</a-tag>
				</template>
			</a-page-header>
			<a-scrollbar ref="contentRef" class="h-[calc(100vh_-_122px)] overflow-auto">
				<a-grid :cols="5" :colGap="10" :rowGap="10" class="grid-demo-grid">
					<a-grid-item v-for="item in iconData" :key="item.id">
						<div class="icon-box">
							<div class="icon-view">
								<component
									:is="`i-${item.name}`"
									:theme="svgIconForm.theme"
									:size="svgIconForm.size"
									:fill="svgIconForm.colors"
									:strokeWidth="svgIconForm.strokeWidth"
									:strokeLinejoin="svgIconForm.strokeLinejoin"
									:strokeLinecap="svgIconForm.strokeLinecap"
								/>
							</div>
							<div class="icon-detail">
								<div class="icon-name">{{ item.title }}</div>
								<div class="icon-desc">{{ item.name }}</div>
							</div>
						</div>
					</a-grid-item>
				</a-grid>
			</a-scrollbar>
		</div>
		<div class="icon-form w-300px">
			<a-form :model="svgIconForm" layout="vertical" class="w-full" style="width: 280px">
				<a-form-item label="图标大小" path="inputNumberValue">
					<a-slider v-model="svgIconForm.size" :step="1" :min="24" :max="48" />
				</a-form-item>
				<a-form-item label="线条粗细" path="sliderValue">
					<a-slider v-model="svgIconForm.strokeWidth" :step="1" :min="1" :max="4" />
				</a-form-item>
				<a-form-item label="图标风格" path="timePickerValue">
					<a-radio-group v-model="svgIconForm.theme">
						<template v-for="option in options" :key="option.value">
							<a-radio :value="option.value">
								<template #radio="{ checked }">
									<div class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
										<div class="flex items-center">
											{{ option.label }}
										</div>
									</div>
								</template>
							</a-radio>
						</template>
					</a-radio-group>
				</a-form-item>
				<a-form-item label="线条颜色" path="colorValue">
					<a-grid :row-gap="12" :col-gap="30" :cols="2">
						<a-grid-item>
							<a-form-item label="外部描边颜色">
								<color-picker v-model:hex="svgIconForm.colors[0]" />
							</a-form-item>
						</a-grid-item>
						<a-grid-item>
							<a-form-item label="外部填充颜色">
								<color-picker v-model:hex="svgIconForm.colors[1]" />
							</a-form-item>
						</a-grid-item>
						<a-grid-item>
							<a-form-item label="内部描边颜色">
								<color-picker v-model:hex="svgIconForm.colors[2]" />
							</a-form-item>
						</a-grid-item>
						<a-grid-item>
							<a-form-item label="内部填充颜色">
								<color-picker v-model:hex="svgIconForm.colors[3]" />
							</a-form-item>
						</a-grid-item>
					</a-grid>
				</a-form-item>
				<a-form-item label="端点类型" path="timePickerValue" :wrapper-col-props="{ span: 24, offset: 0 }">
					<a-radio-group v-model="svgIconForm.strokeLinecap">
						<a-radio value="round">
							<template #radio="{ checked }">
								<div class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
									<div class="flex items-center">
										<i-endpoint-round />
									</div>
								</div>
							</template>
						</a-radio>
						<a-radio value="butt">
							<template #radio="{ checked }">
								<div class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
									<div class="flex items-center">
										<i-endpoint-flat />
									</div>
								</div>
							</template>
						</a-radio>
						<a-radio value="square">
							<template #radio="{ checked }">
								<div class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
									<div class="flex items-center">
										<i-endpoint-square />
									</div>
								</div>
							</template>
						</a-radio>
					</a-radio-group>
				</a-form-item>
				<a-form-item label="拐点类型" path="timePickerValue">
					<a-radio-group v-model="svgIconForm.strokeLinejoin">
						<a-radio value="round">
							<template #radio="{ checked }">
								<div class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
									<div class="flex items-center">
										<i-node-round />
									</div>
								</div>
							</template>
						</a-radio>
						<a-radio value="miter">
							<template #radio="{ checked }">
								<div class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
									<div class="flex items-center">
										<i-node-flat />
									</div>
								</div>
							</template>
						</a-radio>
						<a-radio value="bevel">
							<template #radio="{ checked }">
								<div class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
									<div class="flex items-center">
										<i-node-square />
									</div>
								</div>
							</template>
						</a-radio>
					</a-radio-group>
				</a-form-item>
			</a-form>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { Theme } from '@icon-space/vue-next/lib/runtime'
	import { groupBy } from '@/utils/common'
	import IconJSON from '@icon-space/vue-next/icons.json'

	const svgIconForm = reactive<{
		strokeWidth: number
		size: number
		theme: Theme
		colors: string | string[]
		strokeLinejoin: string
		strokeLinecap: string
	}>({
		strokeWidth: 2,
		size: 24,
		theme: 'multi-color',
		colors: ['#666', '#2F88FF', '#FFF', '#43CCF8'],
		strokeLinejoin: 'miter',
		strokeLinecap: 'square'
	})
	const options = [
		{
			label: '线性',
			value: 'outline'
		},
		{
			label: '填充',
			value: 'filled'
		},
		{
			label: '双色',
			value: 'two-tone'
		},
		{
			label: '多彩',
			value: 'multi-color'
		}
	]
	const iconList: Record<string, any> = computed(() => groupBy(IconJSON, 'categoryCN'))
	const iconData = ref<Record<string, any>[]>([])
	const categoryCN = ref('')
	const count = ref(0)
	const contentRef = ref()
	const iconStore = useIconStore()
	const { activeKey } = storeToRefs(iconStore)
	const handleSelect = (hash: string | undefined) => {
		const key = hash?.replace('#', '') || ''
		activeKey.value = key
		categoryCN.value = key
		iconData.value = iconList.value[key].reverse()
		count.value = iconData.value.length
	}
	watchEffect(() => {
		if (iconData.value && iconData.value.length === 0) {
			const key = activeKey.value ?? Object.keys(iconList.value)[0]
			categoryCN.value = key
			iconData.value = iconList.value[key].reverse()
			count.value = iconData.value.length || 0
		}
	})
</script>

<style lang="less" scoped>
	.icon-box {
		display: flex;
		column-gap: 10px;
		width: 266px;
		height: 66px;
		background-color: #fff;
		box-sizing: border-box;
		.icon-view {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			padding: 10px;
		}
		.icon-detail {
			display: inline-flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			padding: 10px;
			.icon-name {
				font-size: 14px;
				font-weight: 600;
			}
		}
		background: linear-gradient(hsl(213, 40%, 97%) calc(100% - 1.5em), hsl(213, 40%, 93%));
		&:hover {
			cursor: pointer;
			box-shadow: 0 1em 1em #1f2d3d26;
		}
	}
	.custom-radio-card {
		padding: 5px 25px;
		border: 1px solid var(--color-border-2);
		border-radius: 4px;
		box-sizing: border-box;
		margin-top: 5px;
		&:hover,
		&-checked {
			border-color: rgb(var(--primary-6));
		}
		&-checked {
			background-color: var(--color-primary-light-1);
		}
	}
</style>
