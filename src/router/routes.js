import LoginPage from '../pages/LoginPage'
import SalePage from '../pages/SalePage'
import RoutesPage from '../pages/RoutesPage'
import ReportPage from '../pages/ReportPage'
import DriversPage from '../pages/DriversPage'
import DirectoinsPage from '../pages/DirectoinsPage'
import OrderPage from '../pages/OrderPage'
import PeoplePage from '../pages/PeoplePage'
import CitiesPage from '../pages/CitiesPage'

export const privateRoutes = [
	{
		path: '/drivers',
		index: true,
		component: <DriversPage />,
		name: 'Водители',
		exact: true,
	},
	{ path: '/directions', component: <DirectoinsPage />, name: 'Направления', exact: true },
	{ path: '/cities', component: <CitiesPage />, name: 'Города', exact: true },
	{ path: '/people', component: <PeoplePage />, name: 'Пассажиры', exact: true },
	{ path: '/sale', component: <SalePage />, menu: true, name: 'Продажи', exact: true },
	{ path: '/routes', component: <RoutesPage />, menu: true, name: 'Маршруты', exact: true },
	{ path: '/report', component: <ReportPage />, menu: true, name: 'Отчеты', exact: true },
	{ path: '/order', component: <OrderPage />, name: 'Заказы', exact: true },
]
export const publicRoutes = [{ path: '/login', component: <LoginPage />, exact: true }]
