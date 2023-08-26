<template>
	<Header />
	<div class="container px-5 py-5 lg:mx-20 lg:py-10">
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
