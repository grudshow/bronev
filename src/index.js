import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store/store'
import { ScopedCssBaseline } from '@mui/material'

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<ScopedCssBaseline enableColorScheme>
				<App />
			</ScopedCssBaseline>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
)
