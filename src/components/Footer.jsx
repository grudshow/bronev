import { BottomNavigation, Paper, Typography } from '@mui/material'

const Footer = () => {
	return (
		<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: 'text.primary' }}>
			<BottomNavigation
				sx={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<Typography>© 2022 Bronew</Typography>
			</BottomNavigation>
		</Paper>
	)
}

export default Footer
