<template>
	<div class="abc w-full h-full flex justify-between">
		<div class="icon-nav w-150px h-[calc(100vh_-_60px] overflow-auto">
			<a-scrollbar class="h-[calc(100vh_-_60px)] overflow-auto">
				<a-anchor fix line-less :change-hash="false" scroll-container=".abc" @select="handleSelect">
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
								<IconSpace :type="item.name" />
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
			<IconConfigForm />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { IconSpace } from '@icon-space/vue-next/es/all'
	import IconConfigForm from '@/components/IconConfigForm.vue'
	import { groupBy } from '@/utils/common'
	import IconJSON from '@icon-space/vue-next/icons.json'
	import { DEFAULT_ICON_CONFIGS, IconProvider } from '@icon-space/vue-next'
	import '@icon-space/vue-next/styles/index.css'

	const iconList: Record<string, any> = computed(() => groupBy(IconJSON, 'categoryCN'))
	const iconData = ref<Record<string, any>[]>([])
	const categoryCN = ref('')
	const count = ref(0)
	const contentRef = ref()
	const iconStore = useIconStore()
	const { activeKey } = storeToRefs(iconStore)
	const option = useIconOptionStore()
	IconProvider(option.$state)

	const handleSelect = (hash: string | undefined) => {
		const key = hash?.replace('#', '') || ''
		activeKey.value = key
		categoryCN.value = key
		iconData.value = iconList.value[key]
		count.value = iconData.value.length
	}
	watchEffect(() => {
		if (iconData.value.length === 0) {
			const key = activeKey.value ?? Object.keys(iconList.value)[0]
			categoryCN.value = key
			iconData.value = iconList.value[key]
			count.value = (iconData.value && iconData.value.length) ?? 0
		}
	})
</script>

<style lang="less" scoped>
	.icon-box {
		display: flex;
		align-items: center;
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
			width: auto;
			height: auto;
			min-width: 68px;
			box-sizing: border-box;
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
