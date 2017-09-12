require.config({
	baseUrl: 'lib',
	packages: [
		{
			name: 'vue',
			location: 'vue',
			main: 'vue.runtime'     //runtime build does not contain template compiler
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
		el: '#app',
		render: function (createElement) {
			/*
			this render() do same thing as specifying template below:
			<vue-tabber>
				<vue-tabber-label>title 1</vue-tabber-label>
				<vue-tabber-page>content of page 1</vue-tabber-page>

				<vue-tabber-label>title 2</vue-tabber-label>
				<vue-tabber-page>content of page 2</vue-tabber-page>
			</vue-tabber>
			*/
			return createElement('vue-tabber', [
				createElement('vue-tabber-label', 'title 1'),
				createElement('vue-tabber-page', 'content of page 1'),
				createElement('vue-tabber-label', 'title 2'),
				createElement('vue-tabber-page', 'content of page 2')
			]);
		}
	});
});