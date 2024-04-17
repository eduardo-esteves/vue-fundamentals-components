const app = Vue.createApp({

	data() {
		return {
			plans: ['The Single', 'The Curious', 'The Addict']
		}
	}

})
.component('plan', {
	template: '#plan-template',
	props: {
		name: {
			type: String,
			default: 'The Single',
			required: true,
		},
		price: {
			type: Number,
			default: 0.00,
			required: false,
		},
	}
})
.mount('#app')
