<<<<<<< HEAD
import DrawerHeader from '../DrawerHeader/DrawerHeader'
import { Drawer } from '../DrawerHeader/Drawer.styled'
import Accordion from '../Accordion/Accordion'
import { useSelector } from 'react-redux'

const SideBar = () => {
	const open = useSelector(state => state.sideBarReducer.open)

	return (
		<Drawer variant='permanent' open={open}>
			<DrawerHeader />
			<Accordion />
		</Drawer>
	)
}

export default SideBar
=======
import DrawerHeader from '../DrawerHeader/DrawerHeader'
import { Drawer } from '../DrawerHeader/Drawer.styled'
import Accordion from '../Accordion/Accordion'
import { useSelector } from 'react-redux'

const SideBar = () => {
	const open = useSelector(state => state.sideBarReducer.open)

	return (
		<Drawer variant='permanent' open={open}>
			<DrawerHeader />
			<Accordion />
		</Drawer>
	)
}

export default SideBar
>>>>>>> e56e7f6c9c00ef25c163b9e00791d1847039f73c
