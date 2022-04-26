import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store/store'
import { ColorModeContextProvider } from './context/ColorModeContext'
import Loading from './components/Loading'
import { Suspense } from 'react'
import './utils/i18n/i18n'
import { CssBaseline } from '@mui/material'

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<ColorModeContextProvider>
				<Suspense fallback={<Loading />}>
					<CssBaseline />
					<App />
				</Suspense>
			</ColorModeContextProvider>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
)
