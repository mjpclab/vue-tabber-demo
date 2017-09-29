import Vue from 'vue/dist/vue.esm';
import tabberComponents from 'vue-tabber/components';

tabberComponents.registerTo(Vue);

new Vue({
	el: '#app'
});