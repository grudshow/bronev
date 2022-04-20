<<<<<<< HEAD
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './assets/styles/style.sass'
import Layout from './components/Layout'
import { privateRoutes, publicRoutes } from './router/routes'
import { setUserName } from './store/actions/authAction'

const App = () => {
	const username = useSelector(state => state.authReducer.username)

	const dispatch = useDispatch()

	let location = useLocation()
	let navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('username')) {
			dispatch(setUserName(localStorage.getItem('username')))
			return navigate('/')
		}
	}, [username])

	return (
		<>
			{!username ? (
				<Routes>
					{publicRoutes.map(route => (
						<Route key={route.path} path={route.path} element={route.component}></Route>
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
								element={route.component}
								exact={route.exact}
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
=======
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './assets/styles/style.sass'
import Layout from './components/Layout'
import { privateRoutes, publicRoutes } from './router/routes'
import { setUserName } from './store/actions/authAction'

const App = () => {
	const username = useSelector(state => state.authReducer.username)

	const dispatch = useDispatch()

	let location = useLocation()
	let navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('username')) {
			dispatch(setUserName(localStorage.getItem('username')))
			return navigate('/')
		}
	}, [username])

	return (
		<>
			{!username ? (
				<Routes>
					{publicRoutes.map(route => (
						<Route key={route.path} path={route.path} element={route.component}></Route>
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
								element={route.component}
								exact={route.exact}
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
>>>>>>> e56e7f6c9c00ef25c163b9e00791d1847039f73c
