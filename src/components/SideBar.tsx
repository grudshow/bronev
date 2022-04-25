import DrawerHeader from './DrawerHeader/DrawerHeader'
import { Drawer } from './DrawerHeader/Drawer.styled'
import List from './List/List'
import { useAppSelector } from '../hooks/hooks'
const SideBar = () => {
	const open = useAppSelector(state => state.sideBarReducer.open)

	return (
		<Drawer variant='permanent' open={open}>
			<DrawerHeader />
			<List />
		</Drawer>
	)
}

export default SideBar
