import { IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { DrawerHeader as MyDrawerHeader } from './Drawer.styled'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const DrawerHeader = ({ open, setOpen }) => {
	const theme = useTheme()
	const handleDrawerClose = () => {
		setOpen(false)
	}
	return (
		<MyDrawerHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<Link to='/'>
				<img src={logo} alt='logo' />
			</Link>

			<IconButton onClick={handleDrawerClose}>
				{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
			</IconButton>
		</MyDrawerHeader>
	)
}

export default DrawerHeader
