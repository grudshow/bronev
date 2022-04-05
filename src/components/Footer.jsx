import { BottomNavigation, Paper, Typography } from '@mui/material'

const Footer = () => {
	return (
		<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
			<BottomNavigation
				sx={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<Typography color='initial'>© 2019 Bronew</Typography>
			</BottomNavigation>
		</Paper>
	)
}

export default Footer
