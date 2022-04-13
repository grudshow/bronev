import { useState, useEffect } from 'react'
import instance from '../api/api'
import { onlyNotEmpty } from '../utils/utils'

export const useCustomHook = (initialState, path, pathMain) => {
	const [page, setPage] = useState(1)
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [pageQty, setPageQty] = useState(0)
	const [submit, setSubmit] = useState(false)

	const [querySearch, setQuerySearch] = useState(initialState)

	const handleSearch = e => {
		const name = e.target.name
		setQuerySearch({ ...querySearch, [name]: e.target.value })
	}

	const handleSubmit = () => {
		setSubmit(!submit)
		setPage(1)
	}

	const handleReset = () => {
		setQuerySearch(initialState)
		handleSubmit()
	}

	const handlePage = (event, value) => {
		setPage(value)
	}

	useEffect(() => {
		let mainPath = pathMain || 'dictionary'
		instance
			.get(`${mainPath}/${path}`, {
				params: onlyNotEmpty({
					page,
					...querySearch,
				}),
			})
			.then(res => {
				setLoading(false)
				// console.log(res)
				setData(res.data['hydra:member'])
				setPageQty(Math.ceil(res.data['hydra:totalItems'] / 30))
			})
		console.log(pageQty)
	}, [page, submit])

	return {
		handlePage,
		handleReset,
		handleSubmit,
		handleSearch,
		pageQty,
		page,
		querySearch,
		data,
		initialState,
	}
}
