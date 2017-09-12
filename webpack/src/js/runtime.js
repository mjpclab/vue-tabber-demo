import Vue from 'vue/dist/vue.runtime.esm';
import 'vue-tabber';

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