import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store/store'
import ColorModeContextProvider from './context/ColorModeContext'
import Loading from './components/Loading'
import { Suspense } from 'react'
// import i18n from './utils/i18n'

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<ColorModeContextProvider>
				<Suspense fallback={<Loading />}>
					<App />
				</Suspense>
			</ColorModeContextProvider>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
)
