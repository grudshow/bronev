import { PaletteColor } from '@mui/material'

declare module '@mui/material/styles' {
	interface CustomTheme {}

	interface Theme extends CustomTheme {
		status: {
			danger: React.CSSProperties['color']
		}
	}
	interface ThemeOptions extends CustomTheme {}

	interface Palette {
		neutral: Palette['primary']
	}
	interface PaletteOptions {
		neutral: PaletteOptions['primary']
	}

	interface PaletteColor {
		darker?: string
	}
	interface SimplePaletteColorOptions {
		darker?: string
	}
	interface ThemeOptions {
		status: {
			danger: React.CSSProperties['color']
		}
	}
}
