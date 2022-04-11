import React, { useState, useEffect } from 'react'
import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import { visuallyHidden } from '@mui/utils'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import Loading from './Loading'
import instance from '../api/api'
import { useSearchParams } from 'react-router-dom'
import { onlyNotEmpty } from '../utils/utils'

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
]

export default function EnhancedTable() {
	const [page, setPage] = useState(1)

	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [pageQty, setPageQty] = useState(0)
	const [searchParams, setSearchParams] = useSearchParams()
	const [submit, setSubmit] = useState(false)
	// const [lastname, setLastname] = useState('')
	// const [firstname, setFirstname] = useState('')
	// const [patronymic, setPatronymic] = useState('')
	const initialState = {
		firstname: '',
		lastname: '',
		patronymic: '',
	}

	const [querySearch, setQuerySearch] = useState(initialState)
	console.log(querySearch)
	const handleSearch = e => {
		const name = e.target.name
		setQuerySearch({ ...querySearch, [name]: e.target.value })
	}

	const handleSubmit = e => {
		setSubmit(!submit)
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
				if (!pageQty > 0)
					setPageQty(Math.ceil(res.data['hydra:totalItems'] / res.data['hydra:member'].length))
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

	return !data?.length ? (
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
						<Select labelId='demo-simple-select-label' id='demo-simple-select' label='Sort'>
							<MenuItem value={10}>Активные</MenuItem>
							<MenuItem value={20}>Все</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box mb={2} sx={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
					<Button variant='outlined' color='error'>
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
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((row, idx) => (
								<TableRow key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell component='th' scope='row'>
										{row.lastname}
									</TableCell>
									<TableCell>{row.firstname}</TableCell>
									<TableCell>{row.patronymic}</TableCell>
									<TableCell>{row.sex ? <div>муж</div> : <div>жен</div>}</TableCell>
									<TableCell>{row.birthDate}</TableCell>
									<TableCell>{row.active ? <div>Да</div> : <div>Нет</div>}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<Stack spacing={2}>
					<Pagination
						count={pageQty}
						page={page}
						sx={{ display: 'flex', justifyContent: 'center' }}
						onChange={handlePage}
					/>
				</Stack>
			</Box>
		</>
	)
}
