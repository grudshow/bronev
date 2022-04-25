import { useState } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Collapse,
	Box,
	Grid,
	IconButton,
	Typography,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import Content from '../components/Content'
import { IRowDirections } from '../types/pagesType'

const DirectionsPage = () => {
	const initialState = {
		name: '',
	}

	const headCells = [
		{
			value: 'name',
			label: 'Наименование',
		},
		{
			value: 'shortName',
			label: 'Сокращение',
		},
	]

	const inputs = [{ name: 'name', label: 'Поиск по Наименованию' }]

	return (
		<Content
			inputs={inputs}
			headCells={headCells}
			Row={Row}
			initialState={initialState}
			path='dictionary/directions'
		/>
	)
}

function Row({ row, headCells }: IRowDirections) {
	const [openCard, setOpenCard] = useState(false)
	return (
		<>
			<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
				<TableCell component='th' scope='row'>
					{row.name}
				</TableCell>
				<TableCell>{row.shortName}</TableCell>
				<TableCell>
					<IconButton onClick={() => setOpenCard(!openCard)}>
						{openCard ? <VisibilityOffIcon /> : <VisibilityIcon />}
					</IconButton>
				</TableCell>
			</TableRow>
			<TableRow>
				<Collapse in={openCard} timeout='auto' unmountOnExit>
					<Table size='medium'>
						<TableHead>
							<TableCell align='center'>{row.name}</TableCell>
						</TableHead>
						<TableBody>
							<Grid flexGrow={1} container rowSpacing={1} columnSpacing={1}>
								<Grid item xs={6}>
									{headCells.map(headCell => (
										<Typography key={headCell.label} sx={{ fontWeight: 700, padding: '5px' }}>
											{headCell.label}
										</Typography>
									))}
								</Grid>
								<Grid item xs={6}>
									<Box sx={{ padding: '5px' }}>{row.name}</Box>
									<Box sx={{ padding: '5px' }}>{row.shortName}</Box>
								</Grid>
							</Grid>
						</TableBody>
					</Table>
				</Collapse>
			</TableRow>
		</>
	)
}

export default DirectionsPage
