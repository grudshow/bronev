declare module '@mui/material/styles/' {
	interface TypographyVariants {
		poster: React.CSSProperties
	}

	interface TypographyVariantsOptions {
		poster?: React.CSSProperties
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		poster: true
		h3: false
	}
}
