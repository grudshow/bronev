import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import SalePage from '../pages/SalePage'
import RoutesPage from '../pages/RoutesPage'
import ReportPage from '../pages/ReportPage'

export const privateRoutes = [
	{ path: '/', component: <MainPage />, exact: true },
	{ path: '/sale', component: <SalePage />, name: 'Продажи', exact: true },
	{ path: '/routes', component: <RoutesPage />, name: 'Маршруты', exact: true },
	{ path: '/report', component: <ReportPage />, name: 'Отчеты', exact: true },
]
export const publicRoutes = [{ path: '/login', component: <LoginPage />, exact: true }]
