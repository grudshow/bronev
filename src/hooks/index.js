import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPage, setSubmit, getData } from '../store/actions/dataAction'

export const useCustomHook = (path, initialState) => {
	const dispatch = useDispatch()

	const [querySearch, setQuerySearch] = useState(initialState)

	const page = useSelector(state => state.dataReducer.page)
	const submit = useSelector(state => state.dataReducer.submit)

	const handleSearch = e => {
		const name = e.target.name
		dispatch(setQuerySearch({ ...querySearch, [name]: e.target.value }))
	}

	const handleReset = () => {
		dispatch(setQuerySearch(initialState))
		dispatch(setSubmit(!submit))
		dispatch(setPage(1))
	}

	useEffect(() => {
		dispatch(getData(page, querySearch, path))
	}, [page, submit])

	return {
		handleReset,
		handleSearch,
		querySearch,
	}
}
