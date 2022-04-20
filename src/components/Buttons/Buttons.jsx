import { Box, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setPage, setSubmit } from '../../store/actions/dataAction'

const Buttons = ({ handleReset }) => {
	const dispatch = useDispatch()
	const submit = useSelector(state => state.dataReducer.submit)

	const handleSubmit = () => {
		dispatch(setSubmit(!submit))
		dispatch(setPage(1))
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
