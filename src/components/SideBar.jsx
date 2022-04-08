import React, { useContext } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import {
	Drawer as MuiDrawer,
	List,
	IconButton,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Link } from 'react-router-dom'
import { drawerWidth } from '../constants/constants'
import { OpenSideBarContext } from '../context'

const openedMixin = theme => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
})

const closedMixin = theme => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
})

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}),
)

const SideBar = () => {
	const theme = useTheme()
	const { open, setOpen } = useContext(OpenSideBarContext)

	const handleDrawerClose = () => {
		setOpen(false)
	}

	const accordionItems = [
		{
			title: 'Справочники',
			img: <MenuBookIcon />,
			elements: [
				{ name: 'Водители', breadcrumbs: 'Список водителей', path: '/drivers' },
				{ name: 'Направления', breadcrumbs: 'Список направлений', path: '/directions' },
			],
		},
		{
			title: 'Заказы',
			img: <ShoppingCartIcon />,
			elements: [{ name: 'Просмотр', breadcrumbs: 'Список заказов', path: '/directions' }],
		},
	]

	return (
		<Drawer variant='permanent' open={open}>
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
				</IconButton>
			</DrawerHeader>
			<List>
				{accordionItems.map((item, idx) => (
					<Accordion key={idx}>
						<AccordionSummary
							expandIcon={open ? <ExpandMoreIcon /> : ''}
							aria-controls='panel1a-content'
							id='panel1a-header'
						>
							<ListItemButton
								key={item.title}
								onClick={() => (theme.direction !== 'rtl' ? setOpen(true) : '')}
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : 'auto',
										justifyContent: 'center',
									}}
								>
									{item.img}
								</ListItemIcon>
								<ListItemText
									primary={item.title}
									sx={{ opacity: open ? 1 : 0, display: open ? 'block' : 'none' }}
								/>
							</ListItemButton>
						</AccordionSummary>
						{open && (
							<AccordionDetails>
								{item.elements.map((elem, idx) => (
									<Link
										style={{ display: 'block', marginBottom: '10px', color: 'initial' }}
										to={elem.path}
										key={idx}
									>
										{elem.name}
									</Link>
								))}
							</AccordionDetails>
						)}
					</Accordion>
				))}
			</List>
		</Drawer>
	)
}

export default SideBar
