<template>
	<div class="group-search mb-12 lg:mb-0 md:mb-0">
		<svg
			class="icon-search dark:fill-white"
			aria-hidden="true"
			viewBox="0 0 24 24"
		>
			<g>
				<path
					d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
				></path>
			</g>
		</svg>
		<input
			type="search"
			class="w-full lg:w-[500px] md:w-[350px] input-search dark:bg-[#273b47] dark:text-white shadow-md dark:placeholder:text-white"
			placeholder="Search for a country..."
			v-model="search"
			@keyup="searchCountry"
			@search="searchCountry"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
const search = ref('');
const store = useStore();

const searchCountry = () => {
	store.dispatch('updateSearch', search.value);
	store.dispatch('filterCountries');
};
</script>

<style>
.group-search {
	display: flex;
	line-height: 28px;
	align-items: center;
	position: relative;
}

.input-search {
	height: 48px;
	line-height: 28px;
	padding: 0 1rem;
	padding-left: 2.5rem;
	border: 2px solid transparent;
	border-radius: 8px;
	outline: none;
	transition: 0.3s ease;
}

.input::placeholder {
	color: #9e9ea7;
}

.input:focus,
input:hover {
	outline: none;
	border-color: transparent;
	background-color: transparent;
}

.icon-search {
	position: absolute;
	left: 1rem;
	fill: #757579;
	width: 1.2rem;
	height: 1.2rem;
}
</style>
