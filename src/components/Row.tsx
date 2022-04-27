import { FC, useEffect, useState } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Collapse,
	Box,
	Grid,
	IconButton,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Location, useLocation } from 'react-router-dom'
import { IRow } from '../types/pagesType'
import { useAppSelector } from '../hooks/hooks'

const Row: FC<IRow> = ({ headCells, row }) => {
	const { pathname }: Location = useLocation()

	const page = useAppSelector(state => state.dataReducer.page)

	const [openCard, setOpenCard] = useState<boolean>(false)
	const [collapseHead, setCollapseHead] = useState<string | null>(null)

	const rowValues: string[] = []
	headCells.filter((item: { value: string }) => rowValues.push(item.value))

	const elements = () => {
		return rowValues.map((el: any) => {
			if (el === 'sex') {
				return row['sex'] ? <TableCell key={el}>муж</TableCell> : <TableCell>жен</TableCell>
			}
			if (el === 'active') {
				return row['active'] ? <TableCell key={el}>да</TableCell> : <TableCell>нет</TableCell>
			}
			if (el === 'birthDate') {
				return <TableCell key={el}>{row['birthDate']?.slice(0, 10)}</TableCell>
			}
			if (el === 'documents') {
				return (
					row['documents'] && (
						<TableCell key={el}>
							{row['documents'][0]?.number} {row['documents'][0]?.serial}
						</TableCell>
					)
				)
			}
			return <TableCell key={el}>{row[el]}</TableCell>
		})
	}

	const collapseElements = () => {
		return rowValues.map((el: any) => {
			if (el === 'sex') {
				return row['sex'] ? (
					<Box key={el} sx={{ padding: '5px' }}>
						муж
					</Box>
				) : (
					<Box key={el} sx={{ padding: '5px' }}>
						жен
					</Box>
				)
			}
			if (el === 'active') {
				return row['active'] ? (
					<Box key={el} sx={{ padding: '5px' }}>
						да
					</Box>
				) : (
					<Box key={el} sx={{ padding: '5px' }}>
						нет
					</Box>
				)
			}
			if (el === 'birthDate') {
				return (
					<Box key={el} sx={{ padding: '5px' }}>
						{row['birthDate']?.slice(0, 10)}
					</Box>
				)
			}
			if (el === 'documents') {
				return (
					row['documents'] && (
						<Box key={el} sx={{ padding: '5px' }}>
							{row['documents'][0]?.number} {row['documents'][0]?.serial}
						</Box>
					)
				)
			}
			return (
				<Box key={el} sx={{ padding: '5px' }}>
					{row[el]}
				</Box>
			)
		})
	}

	useEffect(() => {
		switch (pathname) {
			case '/drivers':
				setCollapseHead(row['firstname'] + ' ' + row['lastname'])
				break
			case '/directions':
				setCollapseHead(row['name'])
				break
			case '/cities':
				setCollapseHead(row['name'])
				break
			case '/people':
				setCollapseHead(row['firstname'] + ' ' + row['lastname'])
				break
			default:
				return
		}
	}, [row, page])

	return (
		<>
			<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
				{elements()}
				<TableCell>
					<IconButton onClick={() => setOpenCard(!openCard)}>
						{openCard ? <VisibilityOffIcon /> : <VisibilityIcon />}
					</IconButton>
				</TableCell>
			</TableRow>
			<TableRow>
				<Collapse in={openCard} timeout='auto' unmountOnExit>
					<Table size='medium'>
						<TableHead>
							<TableCell align='center'>{collapseHead}</TableCell>
						</TableHead>
						<TableBody>
							<Grid flexGrow={1} container rowSpacing={1} columnSpacing={1}>
								<Grid item xs={6}>
									{headCells.map((headCell: any) => (
										<Box key={headCell.label} sx={{ fontWeight: 700, padding: '5px' }}>
											{headCell.label}
										</Box>
									))}
								</Grid>
								<Grid item xs={6}>
									{collapseElements()}
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
