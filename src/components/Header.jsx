import React, { useContext } from 'react'
import { Toolbar, Typography, IconButton, Box, Button } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import { styled, useTheme } from '@mui/material/styles'
import { drawerWidth } from '../constants/constants'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { OpenSideBarContext } from '../context'

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))

const Header = () => {
	const pages = [
		{ name: 'Продажи', to: '/sale' },
		{ name: 'Маршруты', to: '/routes' },
		{ name: 'Отчеты', to: '/report' },
	]
	const { open, setOpen } = useContext(OpenSideBarContext)

	const handleDrawerOpen = () => {
		setOpen(true)
	}
	return (
		<AppBar position='fixed' open={open}>
			<Toolbar>
				<IconButton
					color='inherit'
					aria-label='open drawer'
					onClick={handleDrawerOpen}
					edge='start'
					sx={{
						marginRight: 5,
						...(open && { display: 'none' }),
					}}
				>
					<MenuIcon />
				</IconButton>
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					{pages.map(page => (
						<Link key={page.name} to={page.to}>
							<Button sx={{ color: 'white', display: 'block' }}>{page.name}</Button>
						</Link>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header
