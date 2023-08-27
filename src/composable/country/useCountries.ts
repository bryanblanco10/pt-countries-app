import { inject, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
export const useCountries = () => {
	const { countryRepository }: any = inject('provider');
	const store = useStore();
	const isBusy = ref<boolean>(true);

	const loadCountries = async () => {
		try {
			isBusy.value = true;
			const { data } = await countryRepository.getAll();
			store.dispatch('addCountries', data);
		} catch (error) {
			console.log(error);
		} finally {
			isBusy.value = false;
		}
	};

	onMounted(() => {
		loadCountries();
	});

	return {
		isBusy,
	};
};
