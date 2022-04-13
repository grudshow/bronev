import { TextField } from '@mui/material'
const Input = ({ inputs, querySearch, handleSearch }) => {
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
