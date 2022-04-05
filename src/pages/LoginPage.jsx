import React, { useContext, useEffect, useState } from 'react'
import imgBg from '../img/bgmain.jpg'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { AuthContext } from '../context'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)
	const [token, setToken] = useState('')
	const [address, setAddress] = useState(null)

	const openModalWindow = () => {
		let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=500,height=600,left=center,top=center`
		let modal = window.open(process.env.REACT_APP_API_LOGIN, 'auth', params)
		setAddress(modal)
		console.log(modal.location.href)
	}

	useEffect(() => {
		// const searchParams = new URLSearchParams(address.location.href)
		// console.log(searchParams.get('token'))
		if (address) {
			// console.log(window.location.href)
			// console.log(address.location.href)
			// console.log('address.name >', address.name)
			// console.log('address.location >', address.location)
		}
	}, [address])

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
