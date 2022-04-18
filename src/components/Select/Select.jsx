import { FormControl, Select as MySelect, MenuItem, InputLabel } from '@mui/material'
import { useSelector } from 'react-redux'

const Select = ({ handleSearch }) => {
	const querySearch = useSelector(state => state.dataReducer.querySearch)

	return (
		<FormControl>
			<InputLabel id='demo-simple-select-label'>Активные</InputLabel>
			<MySelect
				onChange={handleSearch}
				value={querySearch['show_all']}
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				label='Sort'
				name='show_all'
			>
				<MenuItem value={null}>Активные</MenuItem>
				<MenuItem value={true}>Все</MenuItem>
			</MySelect>
		</FormControl>
	)
}

export default Select
