<template>
	<NuxtLayout name="default"></NuxtLayout>
</template>
<script lang="ts" setup>
	const { title } = useAppConfig()
	onMounted(() => {
		document.title = title
	})
</script>
