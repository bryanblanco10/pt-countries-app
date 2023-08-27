<template>
	<v-select
		:options="options"
		v-model="selected"
		class="style-chooser w-1/2 lg:w-[200px] md:w-[200px] dark:bg-[#273b47] dark:text-white shadow-md dark:placeholder:text-white"
		:class="{ 'style-chooser-dark': isDark }"
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
import { useDark } from '@vueuse/core';
const isDark = useDark();

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

.style-chooser-dark .vs__open-indicator,
.style-chooser-dark .vs__clear {
	fill: #ffffff !important;
}
.style-chooser-dark .vs__dropdown-toggle,
.style-chooser-dark .vs__dropdown-menu,
.style-chooser-dark .vs__search,
.style-chooser-dark .vs__selected {
	color: white !important;
	background-color: #273b47 !important;
}
</style>
