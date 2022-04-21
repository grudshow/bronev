import { setToggleSideBar } from '../../store/sideBar/sideBarAction'
import { useDispatch, useSelector } from 'react-redux'
import { privateRoutes } from '../../router/routes'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { NavLink } from 'react-router-dom'
import {
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Accordion as MyAccordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from '@mui/material'
import { useTheme } from '@emotion/react'

const Accordion = ({ item }) => {
	const theme = useTheme()

	const open = useSelector(state => state.sideBarReducer.open)
	const dispatch = useDispatch()

	return (
		<MyAccordion>
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
					{privateRoutes
						.filter(elem => elem.titleAccordion === item.title)
						.map(elem => (
							<NavLink
								style={({ isActive }) => (isActive ? { color: 'gray' } : { color: 'initial' })}
								to={elem.path}
							>
								<Typography key={elem.name} sx={{ marginBottom: '10px', display: 'block' }}>
									{elem.name}
								</Typography>
							</NavLink>
						))}
				</AccordionDetails>
			)}
		</MyAccordion>
	)
}

export default Accordion
