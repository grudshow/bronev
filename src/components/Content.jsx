import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, setQuerySearch } from '../store/data/dataAction'
import Pagination from './Pagination'
import Input from './Input/Input'
import Select from './Select/Select'
import Buttons from './Buttons/Buttons'
import Loading from './Loading'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Box,
} from '@mui/material'

const Content = ({ inputs, headCells, Row, initialState, path, site }) => {
	const dispatch = useDispatch()

	const querySearch = useSelector(state => state.dataReducer.querySearch)
	const page = useSelector(state => state.dataReducer.page)
	const submit = useSelector(state => state.dataReducer.submit)
	const data = useSelector(state => state.dataReducer.data)
	const pageQty = useSelector(state => state.dataReducer.pageQty)

	const handleSearch = e => {
		const name = e.target.name
		dispatch(setQuerySearch({ ...querySearch, [name]: e.target.value }))
	}

	useEffect(() => {
		dispatch(getData(page, querySearch, path, site))
	}, [page, submit])

	useEffect(() => {
		dispatch(setQuerySearch(initialState))
	}, [])

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
					<Input inputs={inputs} handleSearch={handleSearch} />
					{'show_all' in querySearch && <Select handleSearch={handleSearch} />}
				</Box>
				<Buttons initialState={initialState} />
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
			<Box sx={{ width: '100%' }}>{pageQty !== 1 && <Pagination />}</Box>
		</>
	)
}

export default Content
