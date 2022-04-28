import { createTheme, Theme } from '@mui/material/styles'

const theme: Theme = createTheme({
	palette: {
		// neutral: {
		// 	main: '#ffc107',
		// 	contrastText: '#fff',
		// 	light: '#0d47a1',
		// },
		text: {
			primary: '#000000',
			secondary: '#3e2723',
		},
		background: {
			default: '#e0f2f1',
		},
	},
})

export default theme
