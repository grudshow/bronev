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
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import { visuallyHidden } from '@mui/utils'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import Loading from './Loading'
import instance from '../api/api'

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1
	}
	if (b[orderBy] > a[orderBy]) {
		return 1
	}
	return 0
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index])
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0])
		if (order !== 0) {
			return order
		}
		return a[1] - b[1]
	})
	return stabilizedThis.map(el => el[0])
}

const headCells = [
	{
		id: 'lastname',
		numeric: false,
		disablePadding: true,
		label: 'Фамилия',
	},
	{
		id: 'firstname',
		numeric: false,
		disablePadding: false,
		label: 'Имя',
	},
	{
		id: 'patronymic',
		numeric: false,
		disablePadding: false,
		label: 'Отчество',
	},
	{
		id: 'sex',
		numeric: false,
		disablePadding: false,
		label: 'Пол',
	},
	{
		id: 'birthDate',
		numeric: false,
		disablePadding: false,
		label: 'Дата рождения',
	},
	{
		id: 'active',
		numeric: false,
		disablePadding: false,
		label: 'Активность',
	},
]

function EnhancedTableHead(props) {
	const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props
	const createSortHandler = property => event => {
		onRequestSort(event, property)
	}

	return (
		<TableHead>
			<TableRow>
				<TableCell padding='checkbox'>
					<Checkbox
						color='primary'
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							'aria-label': 'select all desserts',
						}}
					/>
				</TableCell>
				{headCells.map(headCell => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'normal'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component='span' sx={visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

const EnhancedTableToolbar = props => {
	const { numSelected } = props

	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				...(numSelected > 0 && {
					bgcolor: theme =>
						alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
				}),
			}}
		>
			{numSelected > 0 ? (
				<Typography sx={{ flex: '1 1 100%' }} color='inherit' variant='subtitle1' component='div'>
					{numSelected} selected
				</Typography>
			) : (
				<Typography sx={{ flex: '1 1 100%' }} variant='h6' id='tableTitle' component='div'>
					Nutrition
				</Typography>
			)}

			{numSelected > 0 ? (
				<Tooltip title='Delete'>
					<IconButton>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title='Filter list'>
					<IconButton>
						<FilterListIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	)
}

export default function EnhancedTable() {
	const [order, setOrder] = useState('asc')
	const [orderBy, setOrderBy] = useState('lastname')
	const [selected, setSelected] = useState([])
	const [page, setPage] = useState(1)
	const [dense, setDense] = useState(false)
	const [rowsPerPage, setRowsPerPage] = useState(30)

	const [drivers, setDrivers] = useState(null)
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [itemsQty, setItemsQty] = useState(0)

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc'
		setOrder(isAsc ? 'desc' : 'asc')
		setOrderBy(property)
	}

	const handleSelectAllClick = event => {
		if (event.target.checked) {
			const newSelecteds = data.map(n => n.lastname)
			setSelected(newSelecteds)
			return
		}
		setSelected([])
	}

	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name)
		let newSelected = []

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name)
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1))
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1))
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			)
		}

		setSelected(newSelected)
	}

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	const isSelected = name => selected.indexOf(name) !== -1

	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - itemsQty) : 0

	const [sort, setSort] = useState('')

	const handleChange = event => {
		setSort(event.target.value)
	}

	useEffect(() => {
		if (page <= 0) return

		instance.get(`dictionary/drivers?page=${page}`).then(res => {
			setData(res.data['hydra:member'])
			setItemsQty(res.data['hydra:totalItems'])
			setLoading(false)
		})
	}, [page])

	const inputs = [
		{ name: 'lastname', label: 'Поиск по Фамилии' },
		{ name: 'firstname', label: 'Поиск по Имени' },
		{ name: 'patronymic', label: 'Поиск по Отчеству' },
	]

	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {}, [searchQuery])

	return !data?.length ? (
		<Loading />
	) : (
		<>
			<Box
				mb={2}
				spacing={2}
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
					gap: '20px',
				}}
			>
				{inputs.map(({ name, label }) => (
					<TextField
						onChange={e => setSearchQuery(e.target.value)}
						value={searchQuery}
						key={name}
						id={name}
						label={label}
						variant='outlined'
					/>
				))}
				<FormControl>
					<InputLabel id='demo-simple-select-label'>Активные</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={sort}
						label='Sort'
						onChange={handleChange}
					>
						<MenuItem value={10}>Активные</MenuItem>
						<MenuItem value={20}>Все</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Box mb={2} sx={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
				<Button variant='outlined' color='error'>
					Сбросить
				</Button>
				<Button variant='contained' color='primary'>
					Поиск
				</Button>
			</Box>
			<Box sx={{ width: '100%' }}>
				<Paper sx={{ width: '100%', mb: 2 }}>
					<EnhancedTableToolbar numSelected={selected.length} />
					<TableContainer>
						<Table
							sx={{ minWidth: 750 }}
							aria-labelledby='tableTitle'
							size={dense ? 'small' : 'medium'}
						>
							<EnhancedTableHead
								numSelected={selected.length}
								order={order}
								orderBy={orderBy}
								onSelectAllClick={handleSelectAllClick}
								onRequestSort={handleRequestSort}
								rowCount={itemsQty}
							/>
							<TableBody>
								{data?.map((row, index) => {
									const isItemSelected = isSelected(row.lastname)
									const labelId = `enhanced-table-checkbox-${index}`
									return (
										<TableRow
											hover
											onClick={event => handleClick(event, row.lastname)}
											role='checkbox'
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={index}
											selected={isItemSelected}
										>
											<TableCell padding='checkbox'>
												<Checkbox
													color='primary'
													checked={isItemSelected}
													inputProps={{
														'aria-labelledby': labelId,
													}}
												/>
											</TableCell>
											<TableCell component='th' id={labelId} scope='row' padding='none'>
												{row.lastname}
											</TableCell>
											<TableCell>{row.firstname}</TableCell>
											<TableCell>{row.patronymic}</TableCell>
											<TableCell>{row.sex ? <div>муж</div> : <div>жен</div>}</TableCell>
											<TableCell>{row.birthDate}</TableCell>
											<TableCell>{row.active ? <div>Да</div> : <div>Нет</div>}</TableCell>
										</TableRow>
									)
								})}
								{emptyRows > 0 && (
									<TableRow
										style={{
											height: (dense ? 33 : 53) * emptyRows,
										}}
									>
										<TableCell colSpan={6} />
									</TableRow>
								)}
							</TableBody>
						</Table>
					</TableContainer>

					<TablePagination
						rowsPerPageOptions={[5, 10, 30]}
						component='div'
						count={itemsQty}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Paper>
			</Box>
		</>
	)
}
