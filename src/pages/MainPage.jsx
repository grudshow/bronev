import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import Header from '../components/Header'
import BreadCrumbs from '../components/BreadCrumbs'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import EnhancedTable from '../components/Table'
import { DrawerHeader } from '../components/DrawerHeader/Drawer.styled'

export default function MainPage() {
	const theme = useTheme()
	const [open, setOpen] = useState(false)

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
