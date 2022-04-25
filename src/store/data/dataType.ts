export enum dataType {
	SET_DATA = 'SET_DATA',
	SET_LOADING = 'SET_LOADING',
	SET_PAGE_QTY = 'SET_PAGE_QTY',
	SET_PAGE = 'SET_PAGE',
	SET_QUERY_SEARCH = 'SET_QUERY_SEARCH',
	SET_SUBMIT = 'SET_SUBMIT',
	GET_DATA = 'GET_DATA',
}

export interface dataState {
	page: number
	data: null | []
	loading: boolean
	pageQty: number
	submit: boolean
	querySearch: []
}

interface setQuerySearchAction {
	type: dataType.SET_QUERY_SEARCH
	payload: []
}

interface setDataAction {
	type: dataType.SET_DATA
	payload: null | []
}
interface setLoadingAction {
	type: dataType.SET_LOADING
	payload: boolean
}
interface setPageAction {
	type: dataType.SET_PAGE
	payload: number
}
interface setPageQtyAction {
	type: dataType.SET_PAGE_QTY
	payload: number
}
interface setSubmitAction {
	type: dataType.SET_SUBMIT
	payload: boolean
}

interface getDataAction {
	type: dataType.GET_DATA
	payload: any
}

export type dataTypeAction =
	| setDataAction
	| setLoadingAction
	| setPageAction
	| setPageQtyAction
	| setSubmitAction
	| setQuerySearchAction
	| getDataAction
