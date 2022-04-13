import { Toolbar, IconButton, Box, Button } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import AppBar from './Header.styled'

const Header = ({ open, setOpen }) => {
	const pages = [
		{ name: 'Продажи', to: '/sale' },
		{ name: 'Маршруты', to: '/routes' },
		{ name: 'Отчеты', to: '/report' },
	]

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
