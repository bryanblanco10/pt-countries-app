import { Country } from '@/models';
import { inject, onMounted, ref, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
export const useCountry = () => {
	const { countryRepository }: any = inject('provider');
	const { params } = useRoute();
	//Variables
	const slug = ref<string | string[]>('');
	const isBusy = ref<boolean>(true);
	const country = ref<Country>();

	//methods
	const loadCountry = async () => {
		try {
			isBusy.value = true;
			const { data } = await countryRepository.find(slug.value);
			country.value = data[0];
		} catch (error) {
			console.log(error);
		} finally {
			isBusy.value = false;
		}
	};

	//mounted
	onMounted(() => {
		slug.value = params.slug;
	});

	//router
	onBeforeRouteUpdate(async to => {
		slug.value = to?.params?.slug;
	});

	//observed
	watch([slug], () => {
		loadCountry();
	});

	return {
		isBusy,
		country,
	};
};
