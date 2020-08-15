import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Index',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Landing.vue'),
	},
	{
		path: '/details',
		name: 'Details',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Details.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
