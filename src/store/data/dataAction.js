import { getApi } from '../../api/api'
import { onlyNotEmpty } from '../../utils/onlyNotEmpty'
import {
	SET_DATA,
	SET_LOADING,
	SET_PAGE,
	SET_PAGE_QTY,
	SET_QUERY_SEARCH,
	SET_SUBMIT,
} from './dataType'

export const setData = payload => ({
	type: SET_DATA,
	payload,
})

export const setLoading = payload => ({
	type: SET_LOADING,
	payload,
})

export const setPage = payload => ({
	type: SET_PAGE,
	payload,
})

export const setPageQty = payload => ({
	type: SET_PAGE_QTY,
	payload,
})
export const setQuerySearch = payload => ({
	type: SET_QUERY_SEARCH,
	payload,
})

export const setSubmit = payload => ({
	type: SET_SUBMIT,
	payload,
})

export const getData = (page, querySearch, path, site) => async dispatch => {
	const res = await getApi(site)
		.get(path, {
			params: onlyNotEmpty({
				page,
				...querySearch,
			}),
		})
		.then(res => res.data)
	dispatch(setData(res['hydra:member']))
	dispatch(setLoading(false))
	
	if (site) dispatch(setPageQty(Math.ceil(res['hydra:totalItems'] / 50)))
	else dispatch(setPageQty(Math.ceil(res['hydra:totalItems'] / 30)))
}
