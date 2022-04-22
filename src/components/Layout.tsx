import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from './Header/Header'
import Footer from './Footer'
import SideBar from './SideBar/SideBar'
import { DrawerHeader } from './DrawerHeader/Drawer.styled'
import BreadCrumbs from './BreadCrumbs'
import { useAppSelector } from '../hooks/hooks'

const Layout = () => {
	const open = useAppSelector(state => state.sideBarReducer.open)

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
			}}
		>
			<Header />
			<SideBar />
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 2,
					marginLeft: 'auto',
					width: open ? 'calc(100% - 240px)' : 'calc(100% - 65px)',
				}}
			>
				<DrawerHeader />
				<BreadCrumbs />
				<Outlet />
			</Box>
			<Footer />
		</Box>
	)
}

export default Layout
