<template>
	<a-layout class="w-full h-full">
		<a-layout-header class="no-select fixed-header">
			<div class="flex justify-between items-center px-20px">
				<div class="w-135px h-58px flex justify-center items-center">
					<img src="@/assets/logo.svg" alt="logo" width="100%" height="100%" />
				</div>
				<div class="w-500px h-full flex justify-between">
					<a-tabs v-model="selectedKes" type="text" hide-content @change="handleTabs">
						<a-tab-pane key="1" title="首页"> </a-tab-pane>
						<a-tab-pane key="2" title="官方图标库"> </a-tab-pane>
						<a-tab-pane key="3" title="插画库"> </a-tab-pane>
						<a-tab-pane key="4" title="建议反馈"></a-tab-pane>
					</a-tabs>
					<a-avatar :size="32">
						<img
							alt="avatar"
							src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
						/>
					</a-avatar>
				</div>
			</div>
		</a-layout-header>
		<a-layout-content>
			<NuxtPage />
		</a-layout-content>
	</a-layout>
</template>

<script setup lang="ts">
	const selectedKes = ref<string | number>('1')

	const handleTabs = (key: string | number) => {
		selectedKes.value = key
		if (key === '4') {
			window.open('https://github.com/icon-space/IconSpace/issues', '_blank')
		}
	}

	const route = useRoute()
	const { title, language } = useAppConfig()
	const router = useRouter()
	// const
	console.log('router.getRoutes()', router.getRoutes())
</script>

<style scoped>
	.no-select {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.fixed-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		backdrop-filter: blur(5px);
		z-index: 999;
	}
</style>
