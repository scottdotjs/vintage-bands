import VintageBands from './svelte/vintage-bands.svelte'

new VintageBands({ // eslint-disable-line no-new
	target: document.body,
	props:  {
		band: null,
	},
})
