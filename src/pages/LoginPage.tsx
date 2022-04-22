import { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import imgBg from '../assets/images/bgmain.jpg'
import { setUserName } from '../store/auth/authAction'
import { getApi } from '../api/api'
import { useAppSelector } from '../hooks/hooks'

const LoginPage = () => {
	const [address, setAddress] = useState(null)
	const [token, setToken] = useState('')
	const [openModal, setOpenModal] = useState(false)

	const username = useAppSelector(state => state.authReducer.username)

	const dispatch = useDispatch()

	const openModalWindow = () => {
		setAddress(
			// @ts-ignore
			window.open(process.env.REACT_APP_API_LOGIN, 'auth', `width=500,height=600,left=50%,top=50%`),
		)
		setOpenModal(true)
	}

	useEffect(() => {
		if (openModal) {
			const intervalID = setInterval(() => {
				// @ts-ignore
				if (address && address?.location?.href !== 'about:blank' && token !== null) {
					// @ts-ignore
					const searchParams = new URLSearchParams(address.location.search)
					// @ts-ignore
					setToken(searchParams.get('token'))
					// @ts-ignore
					localStorage.setItem('token', searchParams.get('token'))
					if (!username && token !== null) {
						getApi()
							.get('users/current')
							.then(res => {
								localStorage.setItem('username', res.data.username)
								// @ts-ignore
								dispatch(setUserName(localStorage.getItem('username')))
							})
					}
					// @ts-ignore
					address.close()
				}
			}, 500)

			return () => {
				clearInterval(intervalID)
			}
		}
	})

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
