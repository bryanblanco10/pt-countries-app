<template>
	<div class="flex justify-start mb-14">
		<button-back />
	</div>
	<section>
		<div v-if="isBusy">
			<Loading />
		</div>
		<card-detail v-else :country="country" />
	</section>
</template>

<script setup lang="ts">
import ButtonBack from '@/components/ButtonBack.vue';
import CardDetail from './components/CardDetail.vue';
import Loading from '@/components/Loading.vue';
import { useCountry } from '@/composable';
const { country, isBusy } = useCountry();
</script>
