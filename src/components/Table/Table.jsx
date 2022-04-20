import {
	Table as MyTable,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material'

import Row from './Row/Row'

const Table = ({ headCells, data }) => {
	return (
		<TableContainer component={Paper} sx={{ marginBottom: '20px' }}>
			<MyTable sx={{ minWidth: 650 }} aria-label='simple table'>
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
						data.map((row, idx) => <Row key={idx} headCells={headCells} row={row} />)
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
			</MyTable>
		</TableContainer>
	)
}

export default Table
