import { Box, Stack, Breadcrumbs } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { privateRoutes } from '../router/routes'
function handleClick(event) {
	event.preventDefault()
}

export default function BreadCrumbs() {
	const location = useLocation()

	const breadcrumbs = privateRoutes.find(route => route.path === location.pathname).breadcrumbs

	return (
		<Box mb={2}>
			<Stack spacing={2}>
				<Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
					<Link onClick={handleClick} to={location.pathname}>
						{breadcrumbs}
					</Link>
				</Breadcrumbs>
			</Stack>
		</Box>
	)
}
