import BreadCrumbs from '../components/BreadCrumbs'
import { useState, useEffect } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Collapse,
	Box,
	Grid,
	IconButton,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import Loading from '../components/Loading'
import Pagination from '../components/Pagination'
import Input from '../components/Input/Input'
import Select from '../components/Select/Select'
import Buttons from '../components/Buttons/Buttons'

import instance from '../api/api'
import { onlyNotEmpty } from '../utils/utils'
import { useCustomHook } from '../hooks'

const PeoplePage = () => {
	const initialState = {
		FIO: '',
		document: '',
		phone: '',
		show_all: '',
	}

	const { handlePage, handleReset, handleSubmit, handleSearch, pageQty, page, querySearch, data } =
		useCustomHook(initialState, 'people', 'people')

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
			{!data ? (
				<Loading />
			) : (
				<>
					<Box>
						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
								gap: '20px',
								marginBottom: '20px',
							}}
						>
							<Input querySearch={querySearch} handleSearch={handleSearch} inputs={inputs} />
							<Select querySearch={querySearch} handleSearch={handleSearch} />
						</Box>
						<Buttons handleReset={handleReset} handleSubmit={handleSubmit} />
					</Box>
					<TableContainer component={Paper} sx={{ marginBottom: '20px' }}>
						<Table sx={{ minWidth: 650 }} aria-label='simple table'>
							<TableHead>
								<TableRow>
									{headCells.map(headCell => (
										<TableCell key={headCell.label} align='left'>
											{headCell.label}
										</TableCell>
									))}
									<TableCell>Действие</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data.length ? (
									data.map((row, idx) => <Row key={idx} row={row} headCells={headCells} />)
								) : (
									<div
										style={{
											display: 'flex',
											justifyContent: 'center',
											width: '100%',
											position: 'absolute',
											paddingTop: '20px',
											left: '50%',
											transform: 'translate(-50%,0)',
											fontSize: '30px',
										}}
									>
										Нет данных
									</div>
								)}
							</TableBody>
						</Table>
					</TableContainer>
					<Box sx={{ width: '100%' }}>
						{pageQty != 1 && <Pagination page={page} pageQty={pageQty} handlePage={handlePage} />}
					</Box>
				</>
			)}
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
				<TableCell>{row.sex ? <div>муж</div> : <div>жен</div>}</TableCell>
				<TableCell>{row.birthDate.slice(0, 10)}</TableCell>
				<TableCell>
					{row.active ? (
						<div
							style={{
								backgroundColor: 'green',
								width: 'fit-content',
								padding: '5px',
								color: 'white',
								fontWeight: 500,
								borderRadius: '5px',
							}}
						>
							Да
						</div>
					) : (
						<div
							style={{
								backgroundColor: 'red',
								width: 'fit-content',
								padding: '5px',
								color: 'white',
								fontWeight: 500,
								borderRadius: '5px',
							}}
						>
							Нет
						</div>
					)}
				</TableCell>
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
									<Box sx={{ padding: '5px' }}>{row.sex ? <div>муж</div> : <div>жен</div>}</Box>
									<Box sx={{ padding: '5px' }}>{row.birthDate.slice(0, 10)}</Box>
									<Box sx={{ padding: '5px' }}>{row.active ? <div>Да</div> : <div>Нет</div>}</Box>
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
