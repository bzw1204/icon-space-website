<template>
	<NuxtLayout name="default"></NuxtLayout>
</template>
<script lang="ts" setup>

	const layout = 'default'
	const route = useRoute()
	const { title } = useAppConfig()
	onMounted(() => {
		document.title = title
	})
	const svgStore = useSvgStore()
	const { size } = storeToRefs(svgStore)
	const handleAddSize = () => {
		size.value++
	}
</script>
