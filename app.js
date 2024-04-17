const app = Vue.createApp({})

.component('plan-picker', {
	template: '#planPickerTemplate',
	data() {
		return {
			plans: ['The Single', 'The Curious', 'The Addict']
		}
	}
})

.component('plan', {
	template: '#planTemplate',
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
