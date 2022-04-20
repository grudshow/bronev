import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store/store'
import ColorModeContextProvider from './context/ColorModeContext'

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<ColorModeContextProvider>
				<App />
			</ColorModeContextProvider>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
)
