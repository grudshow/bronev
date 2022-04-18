import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPage, setQuerySearch, setSubmit, getData } from '../store/actions/dataAction'

export const useCustomHook = (initialState, path) => {
	const page = useSelector(state => state.dataReducer.page)
	const querySearch = useSelector(state => state.dataReducer.querySearch)
	const submit = useSelector(state => state.dataReducer.submit)
	const dispatch = useDispatch()

	const handleSearch = e => {
		const name = e.target.name
		dispatch(setQuerySearch({ ...querySearch, [name]: e.target.value }))
	}

	const handleSubmit = () => {
		dispatch(setSubmit(!submit))
		dispatch(setPage(1))
	}

	const handleReset = () => {
		dispatch(setQuerySearch(initialState))
		handleSubmit()
	}

	const handlePage = (event, value) => {
		dispatch(setPage(value))
	}

	useEffect(() => {
		dispatch(getData(page, querySearch, path))
		// getApi(site)
		// 	.get(path, {
		// 		params: onlyNotEmpty({
		// 			page,
		// 			...querySearch,
		// 		}),
		// 	})
		// .then(res => {
		// 	console.log('path', path)
		// 	dispatch(setLoading(false))
		// 	dispatch(setData(res.data['hydra:member']))
		// 	if (site) dispatch(setPageQty(Math.ceil(res.data['hydra:totalItems'] / 50)))
		// 	else dispatch(setPageQty(Math.ceil(res.data['hydra:totalItems'] / 30)))
		// })
	}, [page, submit])

	return {
		handlePage,
		handleReset,
		handleSubmit,
		handleSearch,
	}
}
