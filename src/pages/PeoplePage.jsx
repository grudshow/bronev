<<<<<<< HEAD
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

const PeoplePage = () => {
	const initialState = {
		FIO: '',
		document: '',
		phone: '',
	}

	const {} = useCustomHook('people/people/smart-search', initialState)

	const headCells = [
		{
			id: 'lastname',
			label: 'Фамилия',
		},
		{
			id: 'firstname',
			label: 'Имя',
		},
		{
			id: 'patronymic',
			label: 'Отчество',
		},
		{
			id: 'phone',
			label: 'Телефон',
		},
		{
			id: 'email',
			label: 'E-mail',
		},
		{
			id: 'sex',
			label: 'Пол',
		},
		{
			id: 'document',
			label: 'Серия и номер паспорта',
		},
		{
			id: 'birthdate',
			label: 'Дата рождения',
		},
	]

	const inputs = [
		{ name: 'FIO', label: 'Поиск по ФИО' },
		{ name: 'document', label: 'Поиск по серии или номеру документа' },
		{ name: 'phone', label: 'Поиск по Телефон' },
	]

	return <Content inputs={inputs} headCells={headCells} Row={Row} />
}

function Row({ row, headCells }) {
	const [openCard, setOpenCard] = useState(false)

	return (
		<>
			<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
				<TableCell component='th' scope='row'>
					{row.lastname}
				</TableCell>
				<TableCell>{row.firstname}</TableCell>
				<TableCell>{row.patronymic}</TableCell>
				<TableCell>{row.phone}</TableCell>
				<TableCell>{row.email}</TableCell>
				<TableCell>{row.sex ? <div>муж</div> : <div>жен</div>}</TableCell>
				<TableCell>
					{row?.documents[0]?.serial} {row?.documents[0]?.number}
				</TableCell>
				<TableCell>{row.birthdate.slice(0, 10)}</TableCell>
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
							<TableCell align='center'>
								{row.firstname} {row.lastname}
							</TableCell>
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
									<Box sx={{ padding: '5px' }}>{row.lastname}</Box>
									<Box sx={{ padding: '5px' }}>{row.firstname}</Box>
									<Box sx={{ padding: '5px' }}>{row.patronymic}</Box>
									<Box sx={{ padding: '5px' }}>{row.phone}</Box>
									<Box sx={{ padding: '5px' }}>{row.email}</Box>
									<Box sx={{ padding: '5px' }}>{row.sex ? <div>муж</div> : <div>жен</div>}</Box>
									<Box sx={{ padding: '5px' }}>
										{row.documents[0]?.serial} {row.documents[0]?.number}
									</Box>
									<Box sx={{ padding: '5px' }}>{row.birthdate.slice(0, 10)}</Box>
								</Grid>
							</Grid>
						</TableBody>
					</Table>
				</Collapse>
			</TableRow>
		</>
	)
}

export default PeoplePage
=======
import BreadCrumbs from '../components/BreadCrumbs'
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

const PeoplePage = () => {
	const initialState = {
		FIO: '',
		document: '',
		phone: '',
	}

	const {} = useCustomHook(initialState)

	const headCells = [
		{
			id: 'lastname',
			label: 'Фамилия',
		},
		{
			id: 'firstname',
			label: 'Имя',
		},
		{
			id: 'patronymic',
			label: 'Отчество',
		},
		{
			id: 'phone',
			label: 'Телефон',
		},
		{
			id: 'email',
			label: 'E-mail',
		},
		{
			id: 'sex',
			label: 'Пол',
		},
		{
			id: 'document',
			label: 'Серия и номер паспорта',
		},
		{
			id: 'birthdate',
			label: 'Дата рождения',
		},
	]

	const inputs = [
		{ name: 'FIO', label: 'Поиск по ФИО' },
		{ name: 'document', label: 'Поиск по серии или номеру документа' },
		{ name: 'phone', label: 'Поиск по Телефон' },
	]

	return (
		<>
			<BreadCrumbs breadcrumbs='Список пассажиров' path='/people' />
			<Content
				initialState={initialState}
				inputs={inputs}
				headCells={headCells}
				Row={Row}
				path='people/people/smart-search'
			/>
		</>
	)
}

function Row({ row, headCells }) {
	const [openCard, setOpenCard] = useState(false)

	return (
		<>
			<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
				<TableCell component='th' scope='row'>
					{row.lastname}
				</TableCell>
				<TableCell>{row.firstname}</TableCell>
				<TableCell>{row.patronymic}</TableCell>
				<TableCell>{row.phone}</TableCell>
				<TableCell>{row.email}</TableCell>
				<TableCell>{row.sex ? <div>муж</div> : <div>жен</div>}</TableCell>
				<TableCell>
					{row?.documents[0]?.serial} {row?.documents[0]?.number}
				</TableCell>
				<TableCell>{row.birthdate.slice(0, 10)}</TableCell>
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
							<TableCell align='center'>
								{row.firstname} {row.lastname}
							</TableCell>
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
									<Box sx={{ padding: '5px' }}>{row.lastname}</Box>
									<Box sx={{ padding: '5px' }}>{row.firstname}</Box>
									<Box sx={{ padding: '5px' }}>{row.patronymic}</Box>
									<Box sx={{ padding: '5px' }}>{row.phone}</Box>
									<Box sx={{ padding: '5px' }}>{row.email}</Box>
									<Box sx={{ padding: '5px' }}>{row.sex ? <div>муж</div> : <div>жен</div>}</Box>
									<Box sx={{ padding: '5px' }}>
										{row.documents[0]?.serial} {row.documents[0]?.number}
									</Box>
									<Box sx={{ padding: '5px' }}>{row.birthdate.slice(0, 10)}</Box>
								</Grid>
							</Grid>
						</TableBody>
					</Table>
				</Collapse>
			</TableRow>
		</>
	)
}

export default PeoplePage
>>>>>>> e56e7f6c9c00ef25c163b9e00791d1847039f73c
