import Vue from 'vue';
import App from './App.vue';
import router from './router';
import scrollAnimation from '@/directives/scrollAnimation';

Vue.directive('scrollanimation', scrollAnimation);

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
