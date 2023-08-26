import { MutationTree } from 'vuex';
import { CountryStateInterface } from './state';
import { Country } from '@/models';

const mutation: MutationTree<CountryStateInterface> = {
	setCountries(state: CountryStateInterface, payload: Country[]) {
		state.countries = payload;
		state.filteredCountries = payload;
	},
	setCountriesFiltered(state: CountryStateInterface, payload: Country[]) {
		state.filteredCountries = payload;
	},
	setRegion(state: CountryStateInterface, payload: null) {
		state.region = payload;
	},
	setSearch(state: CountryStateInterface, payload: null) {
		state.search = payload;
	},
};

export default mutation;
