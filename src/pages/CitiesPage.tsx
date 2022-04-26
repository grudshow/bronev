import { FC } from 'react'
import Content from '../components/Content'
import { IHeadCells, IInput, IRowCities } from '../types/pagesType'
import { IQuerySearch } from '../store/data/dataType'

const CitiesPage: FC = () => {
	const initialState: IQuerySearch = {
		name: '',
		okato: '',
		oktmo: '',
		shortName: '',
	}

	const headCells: IHeadCells[] = [
		{
			value: 'shortName',
			label: 'Сокращения',
		},
		{
			value: 'name',
			label: 'Наименование',
		},
		{
			value: 'officialName',
			label: 'Оф.наименование',
		},
		{
			value: 'okato',
			label: 'Окато',
		},
		{
			value: 'oktmo',
			label: 'Октмо',
		},
		{
			value: 'latitude',
			label: 'Долгота',
		},
		{
			value: 'longtitude',
			label: 'Широта',
		},
	]

	const inputs: IInput[] = [
		{ name: 'name', label: 'Поиск по Наименованию' },
		{ name: 'shortName', label: 'Поиск по Сокращению' },
		{ name: 'okato', label: 'Поиск по ОКАТО' },
		{ name: 'oktmo', label: 'Поиск по ОКТМО' },
	]

	return (
		<Content
			initialState={initialState}
			inputs={inputs}
			headCells={headCells}
			path='cities'
			site='https://svida.routeam.ru/api/'
		/>
	)
}

// const Row: FC<IRowCities> = ({ row, headCells }) => {
// 	const [openCard, setOpenCard] = useState(false)
// 	return (
// 		<>
// 			<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
// 				<TableCell component='th' scope='row'>
// 					{row.shortName}
// 				</TableCell>
// 				<TableCell>{row.name}</TableCell>
// 				<TableCell>{row.officialName}</TableCell>
// 				<TableCell>{row.okato}</TableCell>
// 				<TableCell>{row.oktmo}</TableCell>
// 				<TableCell>{row.latitude}</TableCell>
// 				<TableCell>{row.longtitude}</TableCell>
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
// 									<Box sx={{ padding: '5px' }}>{row.shortName}</Box>
// 									<Box sx={{ padding: '5px' }}>{row.officialName}</Box>
// 									<Box sx={{ padding: '5px' }}>{row.okato}</Box>
// 									<Box sx={{ padding: '5px' }}>{row.oktmo}</Box>
// 									<Box sx={{ padding: '5px' }}>{row.latitude}</Box>
// 									<Box sx={{ padding: '5px' }}>{row.longtitude}</Box>
// 								</Grid>
// 							</Grid>
// 						</TableBody>
// 					</Table>
// 				</Collapse>
// 			</TableRow>
// 		</>
// 	)
// }

export default CitiesPage
