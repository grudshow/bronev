import { Navigate, Routes, Route, useLocation } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './router/routes'
import { AuthContext } from './context'
import { useState } from 'react'
import './styles/style.sass'
const App = () => {
	const [isAuth, setIsAuth] = useState(true)
	let location = useLocation()
	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
			}}
		>
			{isAuth ? (
				<Routes>
					{privateRoutes.map(route => (
						<Route
							key={route.path}
							exact={route.exact}
							path={route.path}
							element={route.component}
						/>
					))}
					<Route path={location.pathname} element={<Navigate to='/' replace />}></Route>
				</Routes>
			) : (
				<Routes>
					{publicRoutes.map(route => (
						<Route
							key={route.path}
							exact={route.exact}
							path={route.path}
							element={route.component}
						/>
					))}
					<Route path={location.pathname} element={<Navigate to='/login' replace />}></Route>
				</Routes>
			)}
		</AuthContext.Provider>
	)
}

export default App
