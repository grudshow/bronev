import * as React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import Stack from '@mui/material/Stack'

export default function Loading({ loading }) {
	return (
		<Stack direction='row'>
			<LoadingButton loading={loading} variant='outlined'>
				Загрузка...
			</LoadingButton>
		</Stack>
	)
}
