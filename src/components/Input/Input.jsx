<<<<<<< HEAD
import { TextField } from '@mui/material'
const Input = ({ inputs, handleSearch, querySearch }) => {
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
=======
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
>>>>>>> e56e7f6c9c00ef25c163b9e00791d1847039f73c
