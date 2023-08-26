import { ActionTree } from 'vuex';
import { CountryStateInterface } from './state';
import { StateInterface } from '../..';
import { Country } from '@/models';

const actions: ActionTree<CountryStateInterface, StateInterface> = {
	addCountries({ commit }: any, payload: Country[]) {
		commit('setCountries', payload);
	},
	updateRegion({ commit }: any, payload: string) {
		commit('setRegion', payload);
	},
	updateSearch({ commit }: any, payload: string) {
		commit('setSearch', payload.toLowerCase());
	},
	filterCountries({ commit, state }: any) {
		const { countries, region, search } = state;
		let countriesFiltered: Country[] = countries;

		if (region && search) {
			countriesFiltered = countries.filter(
				(country: Country) =>
					country.region.includes(region) &&
					country?.name?.common?.toLowerCase().includes(search),
			);
		} else if (region) {
			countriesFiltered = countries.filter((country: Country) =>
				country.region.includes(region),
			);
		} else if (search) {
			countriesFiltered = countries.filter(
				(country: Country) =>
					country?.name?.common?.toLowerCase().includes(search),
			);
		}
		commit('setCountriesFiltered', countriesFiltered);
	},
};

export default actions;
