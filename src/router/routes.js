import LoginPage from '../pages/LoginPage'
import SalePage from '../pages/SalePage'
import RoutesPage from '../pages/RoutesPage'
import ReportPage from '../pages/ReportPage'
import DriversPage from '../pages/DriversPage'
import DirectionsPage from '../pages/DirectionsPage'
import OrderPage from '../pages/OrderPage'
import PeoplePage from '../pages/PeoplePage'
import CitiesPage from '../pages/CitiesPage'

export const privateRoutes = [
	{
		path: '/drivers',
		index: true,
		component: <DriversPage />,
		name: 'Водители',
		breadcrumbs: 'Список водителей',
	},
	{
		path: '/directions',
		component: <DirectionsPage />,
		name: 'Направления',
		breadcrumbs: 'Список направлений',
	},
	{
		path: '/cities',
		component: <CitiesPage />,
		name: 'Города',
		breadcrumbs: 'Список городов',
	},
	{
		path: '/people',
		component: <PeoplePage />,
		name: 'Пассажиры',
		breadcrumbs: 'Список пассажиров',
	},
	{ path: '/sale', component: <SalePage />, menu: true, name: 'Продажи' },
	{ path: '/routes', component: <RoutesPage />, menu: true, name: 'Маршруты' },
	{ path: '/report', component: <ReportPage />, menu: true, name: 'Отчеты' },
	{ path: '/order', component: <OrderPage />, name: 'Заказы' },
]
export const publicRoutes = [{ path: '/login', component: <LoginPage /> }]
