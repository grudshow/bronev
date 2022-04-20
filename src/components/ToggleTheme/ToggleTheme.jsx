import { useContext } from 'react'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { ColorModeContext } from '../../context/ColorModeContext'

const ToggleTheme = () => {
	const theme = useTheme()
	const colorMode = useContext(ColorModeContext)
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: 'text.primary',
				borderRadius: 1,
				cursor: 'pointer',
			}}
			onClick={colorMode.toggleColorMode}
		>
			{theme.palette.mode} mode
			<IconButton sx={{ ml: 1 }} color='inherit'>
				{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</Box>
	)
}

export default ToggleTheme
