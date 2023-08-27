<template>
	<div
		class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 lg:gap-x-16 xl:gap-x-24 mx-4 lg:mx-0"
	>
		<div class="w-full h-[230px] lg:h-[400px] md:h-[400px] dark:shadow-lg">
			<img
				class="w-full h-full"
				:src="country?.flags?.png"
				:alt="country?.flags?.alt"
			/>
		</div>
		<div class="py-10">
			<h1 class="text-3xl font-bold mb-8">{{ country?.name?.common }}</h1>
			<div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
				<div class="mb-8 lg:mb-0 md:mb-0">
					<p class="text-sm mb-2">
						<strong>Native Name: </strong>
						<span v-if="country">{{
							Object.values(country?.name?.nativeName)[0].official
						}}</span>
					</p>
					<p class="text-sm mb-2">
						<strong>Population: </strong>
						<span>{{ country?.population?.toLocaleString() }}</span>
					</p>
					<p class="text-sm mb-2">
						<strong>Region: </strong> <span>{{ country?.region }}</span>
					</p>
					<p class="text-sm mb-2">
						<strong>Sub Region: </strong> <span>{{ country?.subregion }}</span>
					</p>
					<p class="text-sm mb-2">
						<strong>Capital: </strong>
						<span>{{ country?.capital.join(', ') }}</span>
					</p>
				</div>
				<div>
					<p class="text-sm mb-2">
						<strong>Top Level Domain: </strong>
						<span>{{ country?.capital.join(', ') }}</span>
					</p>
					<p class="text-sm mb-2">
						<strong>Currencies: </strong>
						<span v-if="country">{{
							Object.values(country?.currencies)[0].name
						}}</span>
					</p>
					<p class="text-sm mb-2">
						<strong>Languages: </strong>
						<span v-if="country">{{
							Object.values(country?.languages)[0]
						}}</span>
					</p>
				</div>
			</div>
			<div class="mt-8 flex flex-col lg:w-3/4 xl:w-3/4">
				<strong class="text-sm">Border Countries: </strong>
				<span class="flex flex-wrap mt-4">
					<router-link
						class="text-sm font-medium shadow-md dark:shadow-lg px-8 py-1 rounded dark:bg-[#273b47] mr-3 mb-4"
						v-for="item in country?.borders"
						:to="{ name: 'detail', params: { slug: item } }"
					>
						{{ item }}
					</router-link>
				</span>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { Country } from '@/models';

interface Props {
	country: Country | undefined;
}
defineProps<Props>();
</script>
