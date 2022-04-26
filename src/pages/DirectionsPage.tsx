import { FC } from 'react'
import Content from '../components/Content'
import { IHeadCells, IInput, IRowDirections } from '../types/pagesType'
import { IQuerySearch } from '../store/data/dataType'

const DirectionsPage: FC = () => {
	const initialState: IQuerySearch = {
		name: '',
	}

	const headCells: IHeadCells[] = [
		{
			value: 'name',
			label: 'Наименование',
		},
		{
			value: 'shortName',
			label: 'Сокращение',
		},
	]

	const inputs: IInput[] = [{ name: 'name', label: 'Поиск по Наименованию' }]

	return (
		<Content
			inputs={inputs}
			headCells={headCells}
			initialState={initialState}
			path='dictionary/directions'
		/>
	)
}

// const Row: FC<IRowDirections> = ({ row, headCells }) => {
// 	const [openCard, setOpenCard] = useState(false)
// 	return (
// 		<>
// 			<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
// 				<TableCell component='th' scope='row'>
// 					{row.name}
// 				</TableCell>
// 				<TableCell>{row.shortName}</TableCell>
// 				<TableCell>
// 					<IconButton onClick={() => setOpenCard(!openCard)}>
// 						{openCard ? <VisibilityOffIcon /> : <VisibilityIcon />}
// 					</IconButton>
// 				</TableCell>
// 			</TableRow>
// 			<TableRow>
// 				<Collapse in={openCard} timeout='auto' unmountOnExit>
// 					<Table size='medium'>
// 						<TableHead>
// 							<TableCell align='center'>{row.name}</TableCell>
// 						</TableHead>
// 						<TableBody>
// 							<Grid flexGrow={1} container rowSpacing={1} columnSpacing={1}>
// 								<Grid item xs={6}>
// 									{headCells.map(headCell => (
// 										<Typography key={headCell.label} sx={{ fontWeight: 700, padding: '5px' }}>
// 											{headCell.label}
// 										</Typography>
// 									))}
// 								</Grid>
// 								<Grid item xs={6}>
// 									<Box sx={{ padding: '5px' }}>{row.name}</Box>
// 									<Box sx={{ padding: '5px' }}>{row.shortName}</Box>
// 								</Grid>
// 							</Grid>
// 						</TableBody>
// 					</Table>
// 				</Collapse>
// 			</TableRow>
// 		</>
// 	)
// }

export default DirectionsPage
