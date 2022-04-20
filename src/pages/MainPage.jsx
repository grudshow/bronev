import { Box } from '@mui/material'
import Header from '../components/Header'
import BreadCrumbs from '../components/BreadCrumbs'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import EnhancedTable from '../components/Table'
import { DrawerHeader } from '../components/DrawerHeader/Drawer.styled'

export default function MainPage() {
	return (
		<Box sx={{ display: 'flex' }}>
			<Header />
			<SideBar />
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
