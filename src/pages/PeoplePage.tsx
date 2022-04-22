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
import { IRow } from './pagesType'

const PeoplePage = () => {
	const initialState = {
		FIO: '',
		document: '',
		phone: '',
	}

	const headCells = [
		{
			value: 'lastname',
			label: 'Фамилия',
		},
		{
			value: 'firstname',
			label: 'Имя',
		},
		{
			value: 'patronymic',
			label: 'Отчество',
		},
		{
			value: 'phone',
			label: 'Телефон',
		},
		{
			value: 'email',
			label: 'E-mail',
		},
		{
			value: 'sex',
			label: 'Пол',
		},
		{
			value: 'document',
			label: 'Серия и номер паспорта',
		},
		{
			value: 'birthdate',
			label: 'Дата рождения',
		},
	]

	const inputs = [
		{ name: 'FIO', label: 'Поиск по ФИО' },
		{ name: 'document', label: 'Поиск по серии или номеру документа' },
		{ name: 'phone', label: 'Поиск по Телефон' },
	]

	return (
		<Content
			inputs={inputs}
			headCells={headCells}
			Row={Row}
			initialState={initialState}
			path='people/people/smart-search'
		/>
	)
}

const Row = ({ row, headCells }: IRow) => {
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
				{row?.documents && (
					<TableCell>
						{row?.documents[0]?.serial} {row?.documents[0]?.number}
					</TableCell>
				)}
				<TableCell>{row?.birthdate?.slice(0, 10)}</TableCell>
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
							<TableCell align='center'>
								{row.firstname} {row.lastname}
							</TableCell>
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
									<Box sx={{ padding: '5px' }}>{row.lastname}</Box>
									<Box sx={{ padding: '5px' }}>{row.firstname}</Box>
									<Box sx={{ padding: '5px' }}>{row.patronymic}</Box>
									<Box sx={{ padding: '5px' }}>{row.phone}</Box>
									<Box sx={{ padding: '5px' }}>{row.email}</Box>
									<Box sx={{ padding: '5px' }}>{row.sex ? <div>муж</div> : <div>жен</div>}</Box>
									{row?.documents && (
										<Box sx={{ padding: '5px' }}>
											{row?.documents[0]?.serial} {row?.documents[0]?.number}
										</Box>
									)}
									<Box sx={{ padding: '5px' }}>{row?.birthdate?.slice(0, 10)}</Box>
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