import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'
const Input = ({ inputs, handleSearch }) => {
	const querySearch = useSelector(state => state.dataReducer.querySearch)

	return inputs.map(input => (
		<TextField
			key={input.label}
			{...input}
			value={querySearch[input.name]}
			onChange={handleSearch}
		/>
	))
}

export default Input
