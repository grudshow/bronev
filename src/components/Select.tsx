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
import { dataType, IQuerySearch } from '../store/data/dataType'

const Select: FC<IQuerySearch> = () => {
	const querySearch = useAppSelector(state => state.dataReducer.querySearch)

	const showAll: string = querySearch['show_all'] ? querySearch['show_all'] : ''

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
				value={showAll}
				id='demo-simple-select'
				labelId='demo-simple-select-label'
				name='show_all'
			>
				<MenuItem value='null'>Активные</MenuItem>
				<MenuItem value='true'>Все</MenuItem>
			</MySelect>
		</FormControl>
	)
}

export default Select
