import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Landing',

		component: () =>
			import(/* webpackChunkName: "Landing" */ '../views/Landing.vue'),
	},
	{
		path: '/work/details',
		name: 'WorkDetails',
		component: () =>
			import(
				/* webpackChunkName: "WorkDetails" */ '../views/WorkDetails.vue'
			),
	},
	{
		path: '/about',
		name: 'About',
		component: () =>
			import(/* webpackChunkName: "About" */ '../views/About.vue'),
	},
	{
		path: '/success',
		name: 'FormSuccess',
		component: () =>
			import(
				/* webpackChunkName: "FormSuccess" */ '@/components/form/FormSuccess.vue'
			),
	},
	{
		path: '/error',
		name: 'FormFailure',
		component: () =>
			import(
				/* webpackChunkName: "FormFailure" */ '@/components/form/FormFailure.vue'
			),
	},
];

const router = new VueRouter({
	mode: 'history',
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	base: process.env.BASE_URL,
	routes,
});

export default router;
