import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'
import Header from './Header/Header'
import Footer from './Footer'
import SideBar from './SideBar/SideBar'
import { DrawerHeader } from './DrawerHeader/Drawer.styled'

const Layout = () => {
	const [open, setOpen] = useState(false)

	return (
		<Box sx={{ display: 'flex', paddingBottom: '60px' }}>
			<Header open={open} setOpen={setOpen} />
			<SideBar open={open} setOpen={setOpen} />
			<Box component='main' sx={{ flexGrow: 1, p: 2 }}>
				<DrawerHeader />
				<Outlet />
			</Box>
			<Footer />
		</Box>
	)
}

export default Layout
