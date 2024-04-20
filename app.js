const planComponent = {
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
}

const planPickerComponent = {
	components:{plan: planComponent},
	template: '#planPickerTemplate',
	data() {
		return {
			plans: ['The Single', 'The Curious', 'The Addict']
		}
	}
}

const app = Vue.createApp({
	components: { planPicker: planPickerComponent}
})

.mount('#app')
