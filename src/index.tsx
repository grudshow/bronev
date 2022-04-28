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
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'
import { StyledEngineProvider } from '@mui/styled-engine-sc'

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			{/* <ColorModeContextProvider> */}
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<Suspense fallback={<Loading />}>
						<CssBaseline />
						<App />
					</Suspense>
				</ThemeProvider>
			</StyledEngineProvider>
			{/* </ColorModeContextProvider> */}
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
)
