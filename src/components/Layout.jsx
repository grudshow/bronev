import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from './Header/Header'
import Footer from './Footer'
import SideBar from './SideBar/SideBar'
import { DrawerHeader } from './DrawerHeader/Drawer.styled'
import BreadCrumbs from './BreadCrumbs'

const Layout = () => {
	return (
		<Box sx={{ display: 'flex', paddingBottom: '60px' }}>
			<Header />
			<SideBar />
			<Box component='main' sx={{ flexGrow: 1, p: 2 }}>
				<DrawerHeader />
				<BreadCrumbs />
				<Outlet />
			</Box>
			<Footer />
		</Box>
	)
}

export default Layout
