<template>
	<div class="h-56 sm:h-36">
		<img
			class="h-56 sm:h-36 w-full"
			:src="country?.flags?.png"
			:alt="country?.flags?.alt"
		/>
	</div>
	<h4 class="text-xl font-bold text-gray-500">{{ country?.name?.common }}</h4>
	<p class="text-sm text-gray-400">
		Capital:
		<strong v-for="capital in country?.capital">
			{{ capital }}
			<template> </template>
		</strong>
	</p>
	<p class="text-sm text-gray-400">
		Population: <strong>{{ country?.population?.toLocaleString() }}</strong>
	</p>
	<p class="text-sm text-gray-400">
		Region: <strong>{{ country?.region }}</strong>
	</p>
</template>

<script setup lang="ts">
import { Country } from '@/models';

interface Props {
	country: Country;
}
defineProps<Props>();
</script>
