<template>
	<div
		class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-14"
		v-if="countries.length > 0"
	>
		<div
			class="border border-gray-300 rounded p-3"
			v-for="country in countries"
		>
			<card-country :country="country" />
		</div>
	</div>
	<div class="text-center" v-else>
		<p class="text-xl font-semibold">No se encontraron resultados</p>
	</div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import CardCountry from './CardCountry.vue';
import { computed } from 'vue';
const store = useStore();
const countries = computed(() => store.state.country.filteredCountries);
</script>
