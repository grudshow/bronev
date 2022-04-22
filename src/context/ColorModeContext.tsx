import React, { createContext, useState, useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
})

export default function ColorModeContextProvider({ children }: any) {
	const [mode, setMode] = useState<'light' | 'dark'>('light')
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
