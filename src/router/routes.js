import LoginPage from '../pages/LoginPage'
import SalePage from '../pages/SalePage'
import RoutesPage from '../pages/RoutesPage'
import ReportPage from '../pages/ReportPage'
import DriversPage from '../pages/DriversPage'
import DirectoinsPage from '../pages/DirectoinsPage'
import Layout from '../components/Layout'

export const privateRoutes = [
	// { path: '/', component: <Layout />, exact: true },
	// { path: '/sale', component: <SalePage />, name: 'Продажи', exact: true },
	// { path: '/routes', component: <RoutesPage />, name: 'Маршруты', exact: true },
	// { path: '/report', component: <ReportPage />, name: 'Отчеты', exact: true },
	// { path: '/drivers', component: <DriversPage />, name: 'Водители', exact: true },
	// { path: '/directions', component: <DirectoinsPage />, name: 'Направления', exact: true },
]
export const publicRoutes = [{ path: '/login', component: <LoginPage />, exact: true }]
