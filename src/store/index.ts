import { createStore } from 'vuex';
import country from './modules/country';
export interface StateInterface {
	country: unknown;
}

export default createStore<StateInterface>({
	modules: {
		country,
	},
});
