<template>
	<section class="flex flex-col lg:flex-row md:flex-row justify-between mb-14">
		<Search />
		<Select />
	</section>
	<list-countries />
</template>

<script setup lang="ts">
import Search from '@/components/Search.vue';
import Select from '@/components/Select.vue';
import ListCountries from './components/ListCountries.vue';
</script>
