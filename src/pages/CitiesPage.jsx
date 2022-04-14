import { useEffect, useState } from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import Content from '../components/Content'
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

import { useCustomHook } from '../hooks'
import { onlyNotEmpty } from '../utils/utils'
// import { getApi } from '../api/api'
import axios from 'axios'

const CitiesPage = () => {
	const initialState = {
		name: '',
		okato: '',
		oktmo: '',
		shortName: '',
	}

	// const { querySearch, page } = useCustomHook()

	const headCells = [
		{
			id: 'lastname',
			label: 'Фамилия',
		},
		{
			id: 'firstname',
			label: 'Имя',
		},
		{
			id: 'patronymic',
			label: 'Отчество',
		},
		{
			id: 'sex',
			label: 'Пол',
		},
		{
			id: 'birthDate',
			label: 'Дата рождения',
		},
		{
			id: 'active',
			label: 'Активность',
		},
	]

	const inputs = [
		{ name: 'name', label: 'Поиск по Наименованию' },
		{ name: 'shortName', label: 'Поиск по Сокращению' },
		{ name: 'okato', label: 'Поиск по ОКАТО' },
		{ name: 'oktmo', label: 'Поиск по ОКТМО' },
	]

	useEffect(() => {
		const instance = axios.create({
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				Accept: 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
		})

		instance.interceptors.response.use(
			function (response) {
				localStorage.setItem('x-jwt-token', response.headers['x-jwt-token'])
				return response
			},
			function (error) {
				return Promise.reject(error)
			},
		)
		instance.get('https://svida.routeam.ru/api/cities').then(res => console.log(res))
	}, [])

	return (
		<>
			{/* <BreadCrumbs breadcrumbs='Список городов' path='/cities' /> */}
			{/* <Content initialState={initialState} inputs={inputs} headCells={headCells} Row={Row} /> */}
		</>
	)
}

export default CitiesPage
