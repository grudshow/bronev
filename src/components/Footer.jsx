import { Paper, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
const Footer = () => {
	const { t } = useTranslation()
	return (
		<Paper
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				minHeight: '60px',
			}}
		>
			<Typography sx={{ color: 'text.primary', textTransform: 'capitalize' }} fontSize={24}>
				© 2022 {t('title')}
			</Typography>
		</Paper>
	)
}

export default Footer
