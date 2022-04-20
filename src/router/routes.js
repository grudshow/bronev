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
		exact: true,
		breadcrumbs: 'Список водителей',
	},
	{
		path: '/directions',
		component: <DirectionsPage />,
		name: 'Направления',
		exact: true,
		breadcrumbs: 'Список направлений',
	},
	{
		path: '/cities',
		component: <CitiesPage />,
		name: 'Города',
		exact: true,
		breadcrumbs: 'Список городов',
	},
	{
		path: '/people',
		component: <PeoplePage />,
		name: 'Пассажиры',
		exact: true,
		breadcrumbs: 'Список пассажиров',
	},
	{ path: '/sale', component: <SalePage />, menu: true, name: 'Продажи', exact: true },
	{ path: '/routes', component: <RoutesPage />, menu: true, name: 'Маршруты', exact: true },
	{ path: '/report', component: <ReportPage />, menu: true, name: 'Отчеты', exact: true },
	{ path: '/order', component: <OrderPage />, name: 'Заказы', exact: true },
]
export const publicRoutes = [{ path: '/login', component: <LoginPage />, exact: true }]
