import { extendTheme } from '@chakra-ui/react'

const theme = {
	config: {
		initialColorMode: 'light',
	},
	colors: {
		primary: 'rebeccapurple',
	},
	fonts: {
		body: '"Heebo", sans-serif',
		heading: '"Heebo", sans-serif',
		mono: 'Menlo, monospace',
	},
}

export default extendTheme(theme)
