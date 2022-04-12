import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import Header from './Header'
import { OpenSideBarContext } from '../context'
import Footer from './Footer'
import SideBar from './SideBar'

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}))

const Layout = () => {
	const theme = useTheme()
	const [open, setOpen] = useState(false)

	return (
		<OpenSideBarContext.Provider value={{ open, setOpen }}>
			<Box sx={{ display: 'flex', paddingBottom: '60px' }}>
				<Header />
				<SideBar />
				<Box component='main' sx={{ flexGrow: 1, p: 2 }}>
					<DrawerHeader />
					<Outlet />
				</Box>
				<Footer />
			</Box>
		</OpenSideBarContext.Provider>
	)
}

export default Layout
