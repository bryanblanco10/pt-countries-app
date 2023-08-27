<template>
	<header
		class="flex justify-between items-center py-4 px-4 sm:px-4 md:px-18 lg:px-20 border-b-[1.5px] mx-auto dark:shadow-lg dark:bg-[#273b47] dark:border-none sticky top-0 bg-white z-50"
	>
		<router-link to="/">
			<h1 class="text-lg sm:text-lg md:text-2xl lg:text-2xl font-bold">
				Where in the world?
			</h1>
		</router-link>
		<div>
			<button
				class="flex items-center text-base w-full font-semibold"
				@click.prevent="togleDark()"
			>
				<sun-icon v-if="isDark" class="icon" />
				<moon-icon v-else class="icon" />
				{{ isDark ? 'Light Mode' : 'Dark Mode' }}
			</button>
		</div>
	</header>
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const togleDark = useToggle(isDark);
</script>
<style>
.icon {
	width: 18px;
	height: 18px;
	margin-right: 8px;
}
</style>
