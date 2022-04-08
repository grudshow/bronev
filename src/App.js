import { Navigate, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from './context'
import { useEffect, useState } from 'react'
import './styles/style.sass'
import Layout from './components/Layout'
import DriversPage from './pages/DriversPage'
import LoginPage from './pages/LoginPage'
import DirectoinsPage from './pages/DirectoinsPage'
import OrderPage from './pages/OrderPage'
import ReportPage from './pages/ReportPage'
import SalePage from './pages/SalePage'
import RoutesPage from './pages/RoutesPage'

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
					<Route path='/login' element={<LoginPage />}></Route>
					<Route path={location.pathname} element={<Navigate to='/login' replace />}></Route>
				</Routes>
			) : (
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route path='/drivers' element={<DriversPage />}></Route>
						<Route path='/order' element={<OrderPage />}></Route>
						<Route path='/report' element={<ReportPage />}></Route>
						<Route path='/sale' element={<SalePage />}></Route>
						<Route path='/directions' element={<DirectoinsPage />}></Route>
						<Route path='/routes' element={<RoutesPage />}></Route>
					</Route>
					<Route index element={<Navigate to='/drivers' replace />}></Route>
				</Routes>
			)}
			{/* <Route path='/login' element={<LoginPage />}></Route> */}
		</AuthContext.Provider>
	)
}

export default App
