import { Box, Stack, Breadcrumbs } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

function handleClick(event) {
	event.preventDefault()
}

export default function BreadCrumbs({ breadcrumbs }) {
	const location = useLocation()
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
