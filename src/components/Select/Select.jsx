import { FormControl, Select as MySelect, MenuItem, InputLabel } from '@mui/material'

const Select = ({ handleSearch, querySearch }) => {
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
