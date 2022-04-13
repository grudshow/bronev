import { useContext, useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { AuthContext } from '../context'
import imgBg from '../assets/images/bgmain.jpg'

const LoginPage = () => {
	const { setIsAuth } = useContext(AuthContext)
	const [address, setAddress] = useState(null)
	const [token, setToken] = useState('')
	const [openModal, setOpenModal] = useState(false)

	const openModalWindow = () => {
		setAddress(
			window.open(process.env.REACT_APP_API_LOGIN, 'auth', `width=500,height=600,left=50%,top=50%`),
		)
		setOpenModal(true)
	}

	useEffect(() => {
		if (openModal) {
			const intervalID = setInterval(() => {
				if (address && address?.location?.href !== 'about:blank') {
					const searchParams = new URLSearchParams(address.location.search)
					setToken(searchParams.get('token'))
					localStorage.setItem('token', searchParams.get('token'))
					address.close()
					setIsAuth(true)
				}
			}, 500)

			return () => {
				clearInterval(intervalID)
			}
		}
	}, [openModal])
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
