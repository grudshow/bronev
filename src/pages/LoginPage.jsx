import React, { useContext, useEffect, useState } from 'react'
import imgBg from '../img/bgmain.jpg'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { AuthContext } from '../context'
import { Routes, Navigate, Route } from 'react-router-dom'

const LoginPage = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)
	const [address, setAddress] = useState(null)
	const [token, setToken] = useState(null)

	const openModalWindow = () => {
		setAddress(
			window.open(process.env.REACT_APP_API_LOGIN, 'auth', `width=500,height=600,left=50%,top=50%`),
		)
	}

	// useEffect(() => {
	// 	if (address) {
	// 		console.log(address)
	// 		// console.log(address.location.href)
	// 	}
	// 	const searchParams = new URLSearchParams(address.location.search)
	// 	setToken(searchParams.get('token'))
	// 	localStorage.setItem('token', token)
	// }, [address])

	// useEffect(() => {
	// 	if (localStorage.getItem('token') == token) {
	// 		address.close()
	// 		setIsAuth(true)
	// 	}
	// }, [token])

	return (
		<Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
			<img src={imgBg} alt='img' style={{ height: '100%' }} />
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					padding: '0 50px',
				}}
			>
				<Box sx={{ maxWidth: '960px' }}>
					<Typography variant='h4' mb={4}>
						Добро пожаловать в систему управления <br /> продажами БРОНЕВ
					</Typography>
					<Typography variant='h6' mb={4}>
						Для продолжения работы необходимо пройти авторизацию
					</Typography>
					<Button onClick={openModalWindow} variant='outlined' sx={{ minWidth: '400px' }}>
						Войти
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default LoginPage
