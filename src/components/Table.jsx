import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import axios from 'axios'
import Loading from './Loading'

const EnhancedTable = () => {
	const [drivers, setDrivers] = useState(null)
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(async () => {
		await axios
			.get('https://core.t2.routeam.ru/api/dictionary/drivers', {
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					Authorization: 'Bearer ' + localStorage.getItem('token'),
					Accept: 'application/ld+json',
				},
			})
			.then(res => setDrivers(res))
		if (!localStorage.getItem('x-jwt-token'))
			localStorage.setItem('x-jwt-token', drivers.headers['x-jwt-token'])
	}, [])

	useEffect(() => {
		if (drivers) {
			setData(drivers.data['hydra:member'])
			console.log(drivers)
			setLoading(false)
		}
	}, [drivers])

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Фамилия</TableCell>
						<TableCell align='right'>Имя</TableCell>
						<TableCell align='right'>Отчество</TableCell>
						<TableCell align='right'>Пол</TableCell>
						<TableCell align='right'>Дата рождения</TableCell>
						<TableCell align='right'>Активность</TableCell>
						<TableCell align='right'>Действия</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{loading ? (
						<Loading />
					) : (
						data.map(({ lastname, firstname, patronymic, sex, birthDate, active }, idx) => (
							<TableRow key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{lastname}
								</TableCell>
								<TableCell align='right'>{firstname}</TableCell>
								<TableCell align='right'>{patronymic}</TableCell>
								<TableCell align='right'>{sex ? <div>муж</div> : <div>жен</div>}</TableCell>
								<TableCell align='right'>{birthDate}</TableCell>
								<TableCell align='right'>{active ? <div>Да</div> : <div>Нет</div>}</TableCell>
								<TableCell align='right'>Нету</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default EnhancedTable
