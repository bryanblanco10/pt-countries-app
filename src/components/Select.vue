<template>
	<v-select
		:options="options"
		v-model="selected"
		class="style-chooser w-1/2 lg:w-[200px] md:w-[200px] dark:bg-[#273b47] dark:text-white shadow-md dark:placeholder:text-white"
		label="name"
		placeholder="Filter by Region"
		@update:modelValue="filteredCountries()"
	>
		<template #no-options>Sin opciones</template>
	</v-select>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
const options: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
const selected = ref('');
const store = useStore();

const filteredCountries = () => {
	store.dispatch('updateRegion', selected.value);
	store.dispatch('filterCountries');
};
</script>

<style>
/* .style-chooser .vs__clear {
	display: none;
} */

.style-chooser .vs__dropdown-toggle {
	height: 48px;
	line-height: 28px;
	padding-left: 1rem;
	border: 2px solid transparent;
	border-radius: 8px;
	outline: none;
	transition: 0.3s ease;
}
.style-chooser {
	border-radius: 8px;
}
</style>
