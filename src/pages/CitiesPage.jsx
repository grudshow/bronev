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
	Typography
} from '@mui/material'
import Content from '../components/Content'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const CitiesPage = () => {
	const initialState = {
		name: '',
		okato: '',
		oktmo: '',
		shortName: '',
	}

	const headCells = [
		{
			id: 'shortName',
			label: 'Сокращения',
		},
		{
			id: 'name',
			label: 'Наименование',
		},
		{
			id: 'officialName',
			label: 'Оф.наименование',
		},
		{
			id: 'okato',
			label: 'Окато',
		},
		{
			id: 'oktmo',
			label: 'Октмо',
		},
		{
			id: 'latitude',
			label: 'Долгота',
		},
		{
			id: 'longtitude',
			label: 'Широта',
		},
	]

	const inputs = [
		{ name: 'name', label: 'Поиск по Наименованию' },
		{ name: 'shortName', label: 'Поиск по Сокращению' },
		{ name: 'okato', label: 'Поиск по ОКАТО' },
		{ name: 'oktmo', label: 'Поиск по ОКТМО' },
	]

	return (
		<Content
			initialState={initialState}
			inputs={inputs}
			headCells={headCells}
			Row={Row}
			path='cities'
			site='https://svida.routeam.ru/api/'
		/>
	)
}

const Row = ({ row, headCells }) => {
	const [openCard, setOpenCard] = useState(false)
	return (
		<>
			<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
				<TableCell component='th' scope='row'>
					{row.shortName}
				</TableCell>
				<TableCell>{row.name}</TableCell>
				<TableCell>{row.officialName}</TableCell>
				<TableCell>{row.okato}</TableCell>
				<TableCell>{row.oktmo}</TableCell>
				<TableCell>{row.latitude}</TableCell>
				<TableCell>{row.longtitude}</TableCell>
				<TableCell>
					<IconButton onClick={() => setOpenCard(!openCard)}>
						{openCard ? <VisibilityOffIcon /> : <VisibilityIcon />}
					</IconButton>
				</TableCell>
			</TableRow>
			<TableRow>
				<Collapse in={openCard} timeout='auto' unmountOnExit>
					<Table size='big'>
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
									<Box sx={{ padding: '5px' }}>{row.shortName}</Box>
									<Box sx={{ padding: '5px' }}>{row.officialName}</Box>
									<Box sx={{ padding: '5px' }}>{row.okato}</Box>
									<Box sx={{ padding: '5px' }}>{row.oktmo}</Box>
									<Box sx={{ padding: '5px' }}>{row.latitude}</Box>
									<Box sx={{ padding: '5px' }}>{row.longtitude}</Box>
								</Grid>
							</Grid>
						</TableBody>
					</Table>
				</Collapse>
			</TableRow>
		</>
	)
}

export default CitiesPage
