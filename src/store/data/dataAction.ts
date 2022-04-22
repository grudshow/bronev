import { Dispatch } from 'redux'
import { getApi } from '../../api/api'
import { onlyNotEmpty } from '../../utils/onlyNotEmpty'
import { dataType, dataTypeAction } from './dataType'

export const setData = (payload: dataTypeAction) => ({
	type: dataType.SET_DATA,
	payload,
})

export const setLoading = (payload: dataTypeAction) => ({
	type: dataType.SET_LOADING,
	payload,
})

export const setPage = (payload: dataTypeAction) => ({
	type: dataType.SET_PAGE,
	payload,
})

export const setPageQty = (payload: dataTypeAction) => ({
	type: dataType.SET_PAGE_QTY,
	payload,
})
export const setQuerySearch = (payload: dataTypeAction) => ({
	type: dataType.SET_QUERY_SEARCH,
	payload,
})

export const setSubmit = (payload: dataTypeAction) => ({
	type: dataType.SET_SUBMIT,
	payload,
})

export const getData =
	(page: number, querySearch: object, path: string, site: string) =>
	async (dispatch: Dispatch<dataTypeAction>) => {
		const res = await getApi(site)
			.get(path, {
				params: onlyNotEmpty({
					page,
					...querySearch,
				}),
			})
			.then(res => res.data)

		// @ts-ignore
		dispatch(setData(res['hydra:member']))
		// @ts-ignore
		dispatch(setLoading(false))
		// @ts-ignore
		if (site) dispatch(setPageQty(Math.ceil(res['hydra:totalItems'] / 50)))
		// @ts-ignore
		else dispatch(setPageQty(Math.ceil(res['hydra:totalItems'] / 30)))
	}
