<template>
	<router-link
		to="/"
		class="flex items-center justify-center text-sm font-semibold shadow-md dark:shadow-lg px-6 py-2 rounded dark:bg-[#273b47]"
	>
		<arrow-long-left-icon class="icon-back" />
		Back
	</router-link>
</template>

<script setup lang="ts">
import { ArrowLongLeftIcon } from '@heroicons/vue/24/outline';
</script>
<style>
.icon-back {
	width: 20px;
	height: 20px;
	margin-right: 5px;
}
</style>
