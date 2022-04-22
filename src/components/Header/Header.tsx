import { Toolbar, IconButton, Box, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import AppBar from './Header.styled'
import { useDispatch } from 'react-redux'
import { setToggleSideBar } from '../../store/sideBar/sideBarAction'
import { privateRoutes } from '../../router/routes'
import ToggleTheme from '../ToggleTheme/ToggleTheme'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../hooks/hooks'
import Language from '../Language'

const Header = () => {
	const open = useAppSelector(state => state.sideBarReducer.open)

	const dispatch = useDispatch()

	const { t } = useTranslation()

	const handleDrawerOpen = () => {
		//@ts-ignore
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
						.map((page, idx) => (
							<Link style={{ textDecoration: 'none' }} key={page.name} to={page.path}>
								<Button sx={{ color: 'white', display: 'block' }}>{t(`menu.${idx}`)}</Button>
							</Link>
						))}
				</Box>
				<Language />
				<ToggleTheme />
			</Toolbar>
		</AppBar>
	)
}

export default Header