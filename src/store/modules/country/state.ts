import { Country } from '@/models';

export interface CountryStateInterface {
	countries: Country[];
	filteredCountries: Country[];
	search: null;
	region: null;
}

function state(): CountryStateInterface {
	return {
		countries: [],
		filteredCountries: [],
		search: null,
		region: null,
	};
}

export default state;
