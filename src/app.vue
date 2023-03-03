<template>
	<NuxtLayout name="default">
		<h1>Hello</h1>
		<a-button type="primary">按钮</a-button>
	</NuxtLayout>
</template>
<script lang="ts" setup>
	import { storeToRefs } from 'pinia'

	const layout = 'default'
	const route = useRoute()
	const { title, language } = useAppConfig()
	onMounted(() => {
		document.title = title
	})
	const svgStore = useSvgStore()
	const { size } = storeToRefs(svgStore)
	const handleAddSize = () => {
		size.value++
	}
</script>
