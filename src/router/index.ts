import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{
		path: '/',
		name: 'Home',
		component: () =>
			import(/* webpackChunkName: "Home" */ '@/views/homePage/Home.vue'),
	},
	{
		path: '/detalle/:slug',
		name: 'detail',
		component: () =>
			import(/* webpackChunkName: "detail" */ '@/views/detail/Detail.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
