import { useTheme } from '@mui/material/styles'
import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Accordion as MyAccordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setToggleSideBar } from '../../store/sideBar/sideBarAction'

const Accordion = () => {
	const theme = useTheme()

	const accordionItems = [
		{
			title: 'Справочники',
			img: <MenuBookIcon />,
			elements: [
				{ name: 'Водители', breadcrumbs: 'Список водителей', path: '/drivers' },
				{ name: 'Направления', breadcrumbs: 'Список направлений', path: '/directions' },
				{ name: 'Пассажиры', breadcrumbs: 'Список пассажиров', path: '/people' },
				{ name: 'Города', breadcrumbs: 'Список городов', path: '/cities' },
			],
		},
		{
			title: 'Заказы',
			img: <ShoppingCartIcon />,
			elements: [{ name: 'Просмотр', breadcrumbs: 'Список заказов', path: '/order' }],
		},
	]

	const open = useSelector(state => state.sideBarReducer.open)
	const dispatch = useDispatch()

	return (
		<List>
			{accordionItems.map((item, idx) => (
				<MyAccordion key={idx}>
					<AccordionSummary
						expandIcon={open ? <ExpandMoreIcon /> : ''}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<ListItemButton
							key={item.title}
							onClick={() => (theme.direction !== 'rtl' ? dispatch(setToggleSideBar(true)) : '')}
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
									style={{
										display: 'block',
										marginBottom: '10px',
										textDecoration: 'none',
									}}
									to={elem.path}
									key={idx}
								>
									<Typography variant='h8' sx={{ color: 'text.primary' }}>
										{elem.name}
									</Typography>
								</Link>
							))}
						</AccordionDetails>
					)}
				</MyAccordion>
			))}
		</List>
	)
}

export default Accordion
