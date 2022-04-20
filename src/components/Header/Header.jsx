import { Toolbar, IconButton, Box, Button } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import AppBar from './Header.styled'
import { useDispatch, useSelector } from 'react-redux'
import { setToggleSideBar } from '../../store/customize/sideBarAction'
import { privateRoutes } from '../../router/routes'

const Header = () => {
	const open = useSelector(state => state.sideBarReducer.open)
	const dispatch = useDispatch()

	const handleDrawerOpen = () => {
		dispatch(setToggleSideBar(true))
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
					{privateRoutes
						.filter(item => item.menu)
						.map(page => (
							<Link key={page.name} to={page.path}>
								<Button sx={{ color: 'white', display: 'block' }}>{page.name}</Button>
							</Link>
						))}
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header
