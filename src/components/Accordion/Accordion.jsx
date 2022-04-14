import { useTheme } from '@mui/material/styles'
import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Accordion as MyAccordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'

const Accordion = ({ open, setOpen }) => {
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
			elements: [{ name: 'Просмотр', breadcrumbs: 'Список заказов', path: '/directions' }],
		},
	]
	const theme = useTheme()

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
				</MyAccordion>
			))}
		</List>
	)
}

export default Accordion
