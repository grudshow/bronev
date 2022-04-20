import { Outlet } from 'react-router-dom'
<<<<<<< HEAD
import { Box } from '@mui/material'
=======
import { Box, CssBaseline } from '@mui/material'
>>>>>>> e56e7f6c9c00ef25c163b9e00791d1847039f73c
import Header from './Header/Header'
import Footer from './Footer'
import SideBar from './SideBar/SideBar'
import { DrawerHeader } from './DrawerHeader/Drawer.styled'
<<<<<<< HEAD
import BreadCrumbs from './BreadCrumbs'

const Layout = () => {
	return (
=======

const Layout = () => {
return (
>>>>>>> e56e7f6c9c00ef25c163b9e00791d1847039f73c
		<Box sx={{ display: 'flex', paddingBottom: '60px' }}>
			<Header />
			<SideBar />
			<Box component='main' sx={{ flexGrow: 1, p: 2 }}>
				<DrawerHeader />
<<<<<<< HEAD
				<BreadCrumbs />
=======
>>>>>>> e56e7f6c9c00ef25c163b9e00791d1847039f73c
				<Outlet />
			</Box>
			<Footer />
		</Box>
	)
}

export default Layout
