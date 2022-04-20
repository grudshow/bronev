import { Box, Stack, Breadcrumbs } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { privateRoutes } from '../router/routes'
function handleClick(event) {
	event.preventDefault()
}

export default function BreadCrumbs({ breadcrumbs }) {
	const location = useLocation()
<<<<<<< HEAD

	const breadcrumbs = privateRoutes.find(route => route.path === location.pathname).breadcrumbs

=======
>>>>>>> e56e7f6c9c00ef25c163b9e00791d1847039f73c
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
