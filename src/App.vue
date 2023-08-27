<template>
	<Header />
	<div class="mx-6 md:container md:mx-auto py-12">
		<router-view></router-view>
	</div>
</template>

<script setup lang="ts">
import Header from './components/header/Header.vue';
</script>
<style>
@import 'vue-select/dist/vue-select.css';
html.dark {
	color-scheme: dark;
	background-color: hsl(207, 26%, 17%);
}
</style>
