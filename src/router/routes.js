import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'

export const privateRoutes = [{ path: '/', component: <MainPage />, exact: true }]
export const publicRoutes = [{ path: '/login', component: <LoginPage />, exact: true }]
