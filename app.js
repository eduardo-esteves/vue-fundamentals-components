const app = Vue.createApp({

})
.component('click-counter', {
	template: '#clickCounterTemplate',
	data() {
		return {
			count: 0
		}
	}
})
.mount('#app')
