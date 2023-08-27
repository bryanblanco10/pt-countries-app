<template>
	<router-link
		:to="{
			name: 'detail',
			params: { slug: country?.cca2 },
		}"
	>
		<div class="h-56 sm:h-36">
			<img
				class="h-56 sm:h-36 w-full"
				:src="country?.flags?.png"
				:alt="country?.flags?.alt"
				loading="lazy"
			/>
		</div>
		<div class="px-6 py-6">
			<h4 class="text-xl font-bold mb-3">
				{{ country?.name?.common }}
			</h4>
			<p class="text-sm mb-2">
				<strong>Population: </strong>
				<span>{{ country?.population?.toLocaleString() }}</span>
			</p>
			<p class="text-sm mb-2">
				<strong>Region: </strong> <span>{{ country?.region }}</span>
			</p>
			<p class="text-sm mb-2">
				<strong>Capital: </strong>
				<span>
					{{ country?.capital?.join(', ') }}
				</span>
			</p>
		</div>
	</router-link>
</template>

<script setup lang="ts">
import { Country } from '@/models';

interface Props {
	country: Country;
}
defineProps<Props>();
</script>
