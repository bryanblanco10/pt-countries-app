import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store/index';
import RepositoryProvider from './provider/RepositoryProvider';
import VueSelect from 'vue-select';
createApp(App)
	.use(store)
	.use(router)
	.component('v-select', VueSelect)
	.provide('provider', RepositoryProvider)
	.mount('#app');
