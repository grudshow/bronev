import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import { styled, useTheme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import Collapse from '@mui/material/Collapse'

import Loading from './Loading'
import Pagination from './Pagination'
import instance from '../api/api'
import { useSearchParams } from 'react-router-dom'
import { onlyNotEmpty } from '../utils/utils'
import { Grid } from '@mui/material'

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
		id: 'sex',
		label: 'Пол',
	},
	{
		id: 'birthDate',
		label: 'Дата рождения',
	},
	{
		id: 'active',
		label: 'Активность',
	},
	// {
	// 	id: 'action',
	// 	label: 'Действие',
	// },
]

export default function EnhancedTable() {
	const [page, setPage] = useState(1)
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [pageQty, setPageQty] = useState(0)
	const [submit, setSubmit] = useState(false)

	const initialState = {
		firstname: '',
		lastname: '',
		patronymic: '',
		show_all: '',
	}

	const [querySearch, setQuerySearch] = useState(initialState)

	const handleSearch = e => {
		const name = e.target.name
		setQuerySearch({ ...querySearch, [name]: e.target.value })
	}

	const handleSubmit = e => {
		setSubmit(!submit)
		setPage(1)
	}

	const handleReset = () => {
		setQuerySearch(initialState)
		handleSubmit()
	}

	useEffect(() => {
		let params = {
			page,
			...querySearch,
		}
		instance
			.get(`dictionary/drivers`, {
				params: onlyNotEmpty(params),
			})
			.then(res => {
				setLoading(false)
				setData(res.data['hydra:member'])
				setPageQty(Math.ceil(res.data['hydra:totalItems'] / 30))
			})
	}, [page, submit])

	const handlePage = (event, value) => {
		setPage(value)
	}

	const inputs = [
		{ name: 'firstname', label: 'Поиск по Имени' },
		{ name: 'lastname', label: 'Поиск по Фамилии' },
		{ name: 'patronymic', label: 'Поиск по Отчеству' },
	]

	return !data ? (
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
					{inputs.map(input => (
						<TextField
							key={input.label}
							{...input}
							value={querySearch[input.name]}
							onChange={handleSearch}
						/>
					))}
					<FormControl>
						<InputLabel id='demo-simple-select-label'>Активные</InputLabel>
						<Select
							onChange={handleSearch}
							value={querySearch['show_all']}
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							label='Sort'
							name='show_all'
						>
							<MenuItem value={null}>Активные</MenuItem>
							<MenuItem value={true}>Все</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box mb={2} sx={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
					<Button onClick={handleReset} variant='outlined' color='error'>
						Сбросить
					</Button>
					<Button onClick={handleSubmit} type='button' variant='contained' color='primary'>
						Поиск
					</Button>
				</Box>
			</Box>

			<Box sx={{ width: '100%' }}>
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
								data.map((row, idx) => <Row key={idx} row={row} />)
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
				{!!pageQty && <Pagination page={page} pageQty={pageQty} handlePage={handlePage} />}
			</Box>
		</>
	)
}

function Row({ row }) {
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
