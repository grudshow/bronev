import {
	FormControl,
	Select as MySelect,
	MenuItem,
	InputLabel,
	SelectChangeEvent,
} from '@mui/material'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks/hooks'
import { dataType } from '../store/data/dataType'

const Select: FC = () => {
	const querySearch: any = useAppSelector(state => state.dataReducer.querySearch)

	const dispatch = useDispatch()

	const handleSelect = (event: SelectChangeEvent) => {
		const name = event.target.name as string
		dispatch({
			type: dataType.SET_QUERY_SEARCH,
			payload: { ...querySearch, [name]: event.target.value },
		})
	}

	return (
		<FormControl>
			<InputLabel id='demo-simple-select-label'>Активные</InputLabel>
			<MySelect
				onChange={handleSelect}
				value={querySearch['show_all']}
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				label='Sort'
				name='show_all'
			>
				<MenuItem value='null'>Активные</MenuItem>
				<MenuItem value='true'>Все</MenuItem>
			</MySelect>
		</FormControl>
	)
}

export default Select
