import * as React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Box, Stack, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

function handleClick(event) {
	event.preventDefault()
}

export default function BreadCrumbs() {
	const breadcrumbs = [
		<Link underline='hover' key='1' color='inherit' href='/' onClick={handleClick}>
			MUI
		</Link>,
		<Link
			underline='hover'
			key='2'
			color='inherit'
			href='/getting-started/installation/'
			onClick={handleClick}
		>
			Core
		</Link>,
		<Typography key='3' color='text.primary'>
			Breadcrumb
		</Typography>,
	]

	return (
		<Box mb={2}>
			<Stack spacing={2}>
				<Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
					{breadcrumbs}
				</Breadcrumbs>
			</Stack>
		</Box>
	)
}
