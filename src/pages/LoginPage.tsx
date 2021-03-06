import { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import imgBg from '../assets/images/bgmain.jpg'
import { getApi } from '../api/api'
import { useAppSelector } from '../hooks/hooks'
import { authType } from '../store/auth/authType'

const LoginPage = () => {
	const [address, setAddress] = useState<Window | null>(null)
	const [token, setToken] = useState<string | null>('')
	const [openModal, setOpenModal] = useState<boolean>(false)
	const username = useAppSelector(state => state.authReducer.username)

	const dispatch = useDispatch()

	const openModalWindow = () => {
		setAddress(
			window.open(process.env.REACT_APP_API_LOGIN, 'auth', `width=500,height=600,left=50%,top=50%`),
		)
		setOpenModal(true)
	}

	useEffect(() => {
		const intervalID = setInterval(() => {
			if (address && address?.location?.href !== 'about:blank' && token !== null) {
				const searchParams: any = new URLSearchParams(address?.location?.search)
				setToken(searchParams.get('token'))
				localStorage.setItem('token', searchParams.get('token'))
				if (!username && token !== null) {
					getApi()
						.get('users/current')
						.then(res => {
							localStorage.setItem('username', res.data.username)
							dispatch({
								type: authType.SET_USER_NAME,
								payload: localStorage.getItem('username'),
							})
						})
				}
				address.close()
			}
		}, 500)

		return () => {
			clearInterval(intervalID)
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
