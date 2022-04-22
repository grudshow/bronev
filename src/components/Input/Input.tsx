import { TextField } from '@mui/material'
import { useAppSelector } from '../../hooks/hooks'
const Input = ({ inputs, handleSearch }: any) => {
	const querySearch = useAppSelector(state => state.dataReducer.querySearch)

	return inputs.map((input: any) => (
		<TextField
			key={input.label}
			{...input}
			// @ts-ignore
			value={querySearch[input.name]}
			onChange={handleSearch}
		/>
	))
}

export default Input
