import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './assets/styles/style.sass'
import Layout from './components/Layout'
import { privateRoutes, publicRoutes } from './router/routes'

const App = () => {
	const userName = useSelector(state => state.authReducer.userName)

	let location = useLocation()
	let navigate = useNavigate()

	useEffect(() => {
		console.log('userName', userName)
		if (userName) {
			return navigate('/')
		}
	}, [userName])

	return (
		<>
			{!userName ? (
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
