import DrawerHeader from '../DrawerHeader/DrawerHeader'
import { Drawer } from '../DrawerHeader/Drawer.styled'
import Accordion from '../Accordion/Accordion'

const SideBar = ({ open, setOpen }) => {
	return (
		<Drawer variant='permanent' open={open}>
			<DrawerHeader open={open} setOpen={setOpen} />
			<Accordion open={open} setOpen={setOpen} />
		</Drawer>
	)
}

export default SideBar
