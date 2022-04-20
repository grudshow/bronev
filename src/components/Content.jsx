import Pagination from './Pagination'
import Input from './Input/Input'
import Select from './Select/Select'
import Buttons from './Buttons/Buttons'
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
import { useCustomHook } from '../hooks'
import { useSelector } from 'react-redux'
import Loading from './Loading'

const Content = ({ inputs, headCells, Row }) => {
	const { handleReset, handleSearch, querySearch } = useCustomHook()
	console.log(querySearch)
	const data = useSelector(state => state.dataReducer.data)
	const pageQty = useSelector(state => state.dataReducer.pageQty)

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
					<Input handleSearch={handleSearch} inputs={inputs} querySearch={querySearch} />
					{/* <Select handleSearch={handleSearch} querySearch={querySearch} /> */}
					{/* {'show_all' in querySearch && (
					)} */}
				</Box>
				<Buttons handleReset={handleReset} />
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
