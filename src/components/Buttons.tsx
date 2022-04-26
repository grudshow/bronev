import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button } from '@mui/material'
import { useAppSelector } from '../hooks/hooks'
import { dataType, IQuerySearch } from '../store/data/dataType'

interface IButtonsProps {
	initialState: IQuerySearch
}

const Buttons: FC<IButtonsProps> = ({ initialState }) => {
	const dispatch = useDispatch()
	const submit = useAppSelector(state => state.dataReducer.submit)

	const handleSubmit = () => {
		dispatch({ type: dataType.SET_SUBMIT, payload: !submit })
		dispatch({ type: dataType.SET_PAGE, payload: 1 })
	}

	const handleReset = () => {
		dispatch({ type: dataType.SET_QUERY_SEARCH, payload: initialState })
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
