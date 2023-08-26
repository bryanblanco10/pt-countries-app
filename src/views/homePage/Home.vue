<template>
	<section class="flex flex-col lg:flex-row md:flex-row justify-between mb-14">
		<Search />
		<Select />
	</section>
	<section>
		<div v-if="isBusy">
			<Loading />
		</div>
		<list-countries v-else />
	</section>
</template>

<script setup lang="ts">
import Search from '@/components/Search.vue';
import Select from '@/components/Select.vue';
import ListCountries from './components/ListCountries.vue';
import Loading from '@/components/Loading.vue';
import { useCountries } from '@/composable';
const { isBusy } = useCountries();
</script>
