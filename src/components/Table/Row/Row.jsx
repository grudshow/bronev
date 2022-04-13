import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import {
	Collapse,
	Box,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	IconButton,
} from '@mui/material'
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

export default Row
