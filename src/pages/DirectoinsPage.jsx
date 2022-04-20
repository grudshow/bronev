<<<<<<< HEAD
=======
import BreadCrumbs from '../components/BreadCrumbs'
>>>>>>> e56e7f6c9c00ef25c163b9e00791d1847039f73c
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
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import { useCustomHook } from '../hooks'
import Content from '../components/Content'
<<<<<<< HEAD
import { useSelector } from 'react-redux'

const DirectionsPage = () => {
	const querySearch = useSelector(state => state.directoinsReducer.querySearch)

	const {} = useCustomHook('dictionary/directions', querySearch)
=======

const DirectionsPage = () => {
	const initialState = {
		name: '',
		show_all: '',
	}

	const {} = useCustomHook(initialState)
>>>>>>> e56e7f6c9c00ef25c163b9e00791d1847039f73c

	const headCells = [
		{
			id: 'name',
			label: 'Наименование',
		},
		{
			id: 'shortName',
			label: 'Сокращение',
		},
	]

	const inputs = [{ name: 'name', label: 'Поиск по Наименованию' }]

<<<<<<< HEAD
	return <Content inputs={inputs} headCells={headCells} Row={Row} querySearch={querySearch} />
=======
	return (
		<>
			<BreadCrumbs breadcrumbs='Список направлений' />
			<Content
				initialState={initialState}
				inputs={inputs}
				headCells={headCells}
				Row={Row}
				path='dictionary/directions'
			/>
		</>
	)
>>>>>>> e56e7f6c9c00ef25c163b9e00791d1847039f73c
}

function Row({ row, headCells }) {
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
					<Table size='big'>
						<TableHead>
							<TableCell align='center'>{row.name}</TableCell>
						</TableHead>
						<TableBody>
							<Grid flexGrow={1} container rowSpacing={1} columnSpacing={1}>
								<Grid item xs={6}>
									{headCells.map(headCell => (
										<div
											key={headCell.label}
											style={{ fontWeight: 700, color: 'black', padding: '5px' }}
										>
											{headCell.label}
										</div>
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
