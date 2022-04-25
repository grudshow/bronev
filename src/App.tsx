import { FC } from 'react'
import { CssBaseline } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Layout from './components/Layout'
import { privateRoutes, publicRoutes } from './router/routes'
import { useAppSelector } from './hooks/hooks'
import { authType } from './store/auth/authType'

const App: FC = () => {
	const username = useAppSelector(state => state.authReducer.username)

	const dispatch = useDispatch()

	let location = useLocation()
	let navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('username')) {
			dispatch({ type: authType.SET_USER_NAME, payload: localStorage.getItem('username') })
			return navigate('/')
		}
	}, [username])

	return (
		<>
			<CssBaseline />
			{!username ? (
				<Routes>
					{publicRoutes.map(route => (
						<Route key={route.path} path={route.path} element={<route.component />}></Route>
					))}
					<Route path={location.pathname} element={<Navigate to='/login' replace />}></Route>
				</Routes>
			) : (
				<Routes>
					<Route path='/' element={<Layout />}>
						{privateRoutes.map(route => (
							<Route
								index={route.index}
								key={route.path}
								path={route.path}
								element={<route.component />}
							></Route>
						))}
					</Route>
					<Route index element={<Navigate to='/drivers' replace />}></Route>
				</Routes>
			)}
		</>
	)
}

export default App
