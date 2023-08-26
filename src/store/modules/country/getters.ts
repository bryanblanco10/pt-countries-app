import { GetterTree } from 'vuex';
import { CountryStateInterface } from './state';
import { StateInterface } from '../..';

const getters: GetterTree<CountryStateInterface, StateInterface> = {
	getCountries(state: CountryStateInterface) {
		return state.countries;
	},
};

export default getters;
