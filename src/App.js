import { Navigate, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from './context'
import { useEffect, useState } from 'react'
import './assets/styles/style.sass'
import Layout from './components/Layout'
import { privateRoutes, publicRoutes } from './router/routes'

const App = () => {
	const [isAuth, setIsAuth] = useState(false)
	let location = useLocation()
	let navigate = useNavigate()

	useEffect(() => {
		if (!!localStorage.getItem('token')) {
			setIsAuth(true)
			console.log('АВТОРИЗИРОВАН!!', isAuth)
			return navigate('/')
		}
	}, [isAuth])

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
			}}
		>
			{!isAuth ? (
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
							<Route key={route.path} path={route.path} element={route.component}></Route>
						))}
					</Route>
					<Route index element={<Navigate to='/drivers' replace />}></Route>
				</Routes>
			)}
		</AuthContext.Provider>
	)
}

export default App
