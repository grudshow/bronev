import { Box, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/hooks'
import { setPage, setSubmit, setQuerySearch } from '../../store/data/dataAction'

const Buttons = ({ initialState }: any) => {
	const dispatch = useDispatch()
	const submit = useAppSelector(state => state.dataReducer.submit)

	const handleSubmit = () => {
		// @ts-ignore
		dispatch(setSubmit(!submit))
		// @ts-ignore
		dispatch(setPage(1))
	}

	const handleReset = () => {
		dispatch(setQuerySearch(initialState))
		handleSubmit()
	}

	return (
		<Box mb={2} sx={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
			<Button onClick={handleReset} variant='outlined' color='error'>
				Сбросить
			</Button>
			<Button onClick={handleSubmit} type='button' variant='contained' color='primary'>
				Поиск
			</Button>
		</Box>
	)
}

export default Buttons
