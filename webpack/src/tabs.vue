<template>
	<tab>
		<tab-label>title 1</tab-label>
		<tab-panel>content of page 1</tab-panel>

		<tab-label>title 2</tab-label>
		<tab-panel>content of page 2</tab-panel>
	</tab>
</template>

<script>
	import Tab from 'vue-tabber';
	import 'vue-tabber/dist/theme/gray.css';

	export default {
		components: {
			Tab: Tab,
			TabLabel: Tab.Label,
			TabPanel: Tab.Panel
		}
	}
</script>
