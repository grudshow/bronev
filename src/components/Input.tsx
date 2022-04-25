import { TextField } from '@mui/material'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks/hooks'
import { dataType } from '../store/data/dataType'

const Input: FC = ({ ...props }, name) => {
	const querySearch: any = useAppSelector(state => state.dataReducer.querySearch)
	const dispatch = useDispatch()

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name
		dispatch({
			type: dataType.SET_QUERY_SEARCH,
			payload: { ...querySearch, [name]: event.target.value },
		})
	}

	return <TextField {...props} value={querySearch[name]} onChange={handleSearch} />
}

export default Input
