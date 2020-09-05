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
		path: '/work/details',
		name: 'WorkDetails',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/WorkDetails.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
