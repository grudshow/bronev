import { useDispatch } from 'react-redux'
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
import { useTheme } from '@mui/material/styles'
import { useAppSelector } from '../../hooks/hooks'
import { sideBarType } from '../../store/sideBar/sideBarType'
import { FC } from 'react'
import { IAccordion } from '../../types/accordionType'

const Accordion: FC<IAccordion> = ({ title, img }) => {
	const theme = useTheme()

	const open = useAppSelector(state => state.sideBarReducer.open)
	const dispatch = useDispatch()

	return (
		<MyAccordion>
			<AccordionSummary
				expandIcon={open ? <ExpandMoreIcon /> : ''}
				aria-controls='panel1a-content'
				id='panel1a-header'
			>
				<ListItemButton
					key={title}
					onClick={() => {
						return theme.direction !== 'rtl'
							? dispatch({ type: sideBarType.TOGGLE_SIDE_BAR, payload: true })
							: ''
					}}
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
						{img}
					</ListItemIcon>
					<ListItemText
						primary={title}
						sx={{ opacity: open ? 1 : 0, display: open ? 'block' : 'none' }}
					/>
				</ListItemButton>
			</AccordionSummary>
			{open && (
				<AccordionDetails>
					{privateRoutes
						.filter(elem => elem.titleAccordion === title)
						.map(elem => (
							<NavLink
								key={elem.name}
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
