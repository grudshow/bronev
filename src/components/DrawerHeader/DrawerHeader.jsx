import { IconButton, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { DrawerHeader as MyDrawerHeader } from './Drawer.styled'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useDispatch } from 'react-redux'
import { setToggleSideBar } from '../../store/sideBar/sideBarAction'
import { useTranslation } from 'react-i18next'

const DrawerHeader = () => {
	const theme = useTheme()

	const dispatch = useDispatch()

	const { t } = useTranslation()

	const handleDrawerClose = () => {
		dispatch(setToggleSideBar(false))
	}
	return (
		<MyDrawerHeader>
			<Link
				to='/'
				style={{
					textDecoration: 'none',
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					justifyContent: 'flex-start',
					gap: '15px',
				}}
			>
				<img src={logo} alt='logo' />
				<Typography
					variant='h5'
					sx={{
						color: 'text.secondary',
						textDecoration: 'none !important',
						textTransform: 'uppercase',
						fontWeight: 600,
					}}
				>
					{t('title')}
				</Typography>
			</Link>

			<IconButton onClick={handleDrawerClose}>
				{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
			</IconButton>
		</MyDrawerHeader>
	)
}

export default DrawerHeader
