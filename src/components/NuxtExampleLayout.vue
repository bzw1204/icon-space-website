<template>
	<div class="w-full h-full">
		<slot name="nav" />
		<slot>
			<NuxtPage />
		</slot>
		<slot name="footer" />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
