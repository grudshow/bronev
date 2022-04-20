import { createContext, useState, useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
})

export default function ColorModeContextProvider({ children }) {
	const [mode, setMode] = useState('dark')
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
			},
		}),
		[],
	)

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode],
	)

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	)
}
