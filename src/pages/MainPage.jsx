import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { Routes } from 'react-router-dom'
import Header from '../components/Header'
import BreadCrumbs from '../components/BreadCrumbs'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import EnhancedTable from '../components/Table'

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}))

export default function MainPage() {
	const theme = useTheme()
	const [open, setOpen] = React.useState(false)

	return (
		<Box sx={{ display: 'flex' }}>
			<Header open={open} setOpen={setOpen} />
			<SideBar open={open} setOpen={setOpen} />
			<Box component='main' sx={{ flexGrow: 1, p: 2 }}>
				<DrawerHeader />
				<BreadCrumbs />
				<Box>
					<EnhancedTable />
				</Box>
			</Box>
			<Footer />
		</Box>
	)
}
