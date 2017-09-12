require.config({
	baseUrl: 'lib',
	packages: [
		{
			name: 'vue',
			location: 'vue',
			main: 'vue'
		},
		{
			name: 'vue-tabber',
			location: 'vue-tabber',
			main: 'vue-tabber'
		}
	]
});

require(['vue', 'vue-tabber'], function (Vue, VueTabber) {
	new Vue({
		el: '#app'
	});
});