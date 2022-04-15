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
