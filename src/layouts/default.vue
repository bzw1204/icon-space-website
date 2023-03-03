<template>
	<a-layout class="w-full h-full">
		<a-layout-header>
			<div class="flex justify-between items-center px-20px">
				<div class="w-80px h-30px bg-[var(--color-fill-3)]">Logo</div>
				<div class="w-full h-full">
					<a-menu mode="horizontal" :selected-keys="selectedKes" @menuItemClick="handleMenuClick" @sub-menu-click="handleMenuClick">
						<a-menu-item key="1">
							<!-- <NuxtLink to="/about"></NuxtLink> -->
							Home
						</a-menu-item>
						<a-menu-item key="2">Solution</a-menu-item>
						<a-menu-item key="3">Cloud Service</a-menu-item>
						<a-menu-item key="4">Cooperation</a-menu-item>
					</a-menu>
				</div>
			</div>
		</a-layout-header>
		<a-layout-content>
			<NuxtPage />
		</a-layout-content>
	</a-layout>
</template>

<script setup lang="ts">
	const selectedKes = ref<string[]>(['1'])

	const handleMenuClick = (key: string) => {
		console.log('key', key)
		// selectedKes.value = [key]
	}

	const route = useRoute()
	const { title, language } = useAppConfig()
	const router = useRouter()
	// const
	console.log('router.getRoutes()', router.getRoutes())
</script>

<style scoped></style>
