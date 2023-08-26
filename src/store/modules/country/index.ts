import { Module } from 'vuex';
import { StateInterface } from '../..';

import state, { CountryStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const countryModule: Module<CountryStateInterface, StateInterface> = {
	namespace: true,
	actions,
	getters,
	mutations,
	state,
};

export default countryModule;
