import { useSelector } from 'react-redux'
import DrawerHeader from '../DrawerHeader/DrawerHeader'
import { Drawer } from '../DrawerHeader/Drawer.styled'
import List from '../List/List'
const SideBar = () => {
	const open = useSelector(state => state.sideBarReducer.open)

	return (
		<Drawer variant='permanent' open={open}>
			<DrawerHeader />
			<List />
		</Drawer>
	)
}

export default SideBar
