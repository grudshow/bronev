import * as React from 'react'
import { Box, Stack, Typography, Breadcrumbs } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

function handleClick(event) {
	event.preventDefault()
}

export default function BreadCrumbs() {
	const location = useLocation()
	const pathnames = location.pathname.split('/').filter(x => x)

	return (
		<Box mb={2}>
			<Stack spacing={2}>
				<Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
					<Link onClick={handleClick} to='/drivers'>
						Список водителей
					</Link>
				</Breadcrumbs>
			</Stack>
		</Box>
	)
}
