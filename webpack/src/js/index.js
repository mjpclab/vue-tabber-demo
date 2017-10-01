import Vue from 'vue/dist/vue.esm';
import * as tabberComponents from 'vue-tabber/components';

tabberComponents.registerTo(Vue);

new Vue({
	el: '#app'
});