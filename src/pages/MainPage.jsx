import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import {
	Box,
	List,
	Typography,
	IconButton,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import Accordion from '@mui/material/Accordion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Header from '../components/Header'
import BreadCrumbs from '../components/BreadCrumbs'
import Footer from '../components/Footer'

import { drawerWidth } from '../constants/constants'

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

export default function MainPage() {
	const theme = useTheme()
	const [open, setOpen] = React.useState(false)
	const handleDrawerClose = () => {
		setOpen(false)
	}

	const accordionItems = [
		{
			title: 'Справочники',
			img: <MenuBookIcon />,
			elements: [{ name: 'Водители' }, { name: 'Направления' }],
		},
		{
			title: 'Заказы',
			img: <ShoppingCartIcon />,
			elements: [{ name: 'Просмотр' }],
		},
	]

	return (
		<Box sx={{ display: 'flex' }}>
			<Header open={open} setOpen={setOpen} />
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
							<AccordionDetails>
								{item.elements.map((elem, idx) => (
									<Typography key={idx}>{elem.name}</Typography>
								))}
							</AccordionDetails>
						</Accordion>
					))}
				</List>
			</Drawer>
			<Box component='main' sx={{ flexGrow: 1, p: 2 }}>
				<DrawerHeader />
				<BreadCrumbs />
				<Box sx={{ flexGrow: 1 }}>
					<Typography paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
						elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
						hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
						velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
						Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
						viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
						Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
						at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
						ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
					</Typography>
				</Box>
			</Box>
			<Footer />
		</Box>
	)
}
