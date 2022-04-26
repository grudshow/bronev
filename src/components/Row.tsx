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
	Typography,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Location, useLocation } from 'react-router-dom'

const Row: FC<any> = ({ headCells, row }) => {
	console.log('row', row)
	const [openCard, setOpenCard] = useState<boolean>(false)
	const [collapseHead, setCollapseHead] = useState<string | null>(null)

	const { pathname }: Location = useLocation()
	console.log(typeof pathname)

	const mass: string[] = []
	headCells.filter((item: { value: string }) => mass.push(item.value))

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
	}, [row])

	return (
		<>
			<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
				{mass.map((el: any) => (
					<TableCell key={el}>{row[el]}</TableCell>
				))}
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
										<Typography key={headCell.label} sx={{ fontWeight: 700, padding: '5px' }}>
											{headCell.label}
										</Typography>
									))}
								</Grid>
								<Grid item xs={6}>
									{mass.map((el: any) => (
										<Box key={el} sx={{ padding: '5px' }}>
											{row[el]}
										</Box>
									))}
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
