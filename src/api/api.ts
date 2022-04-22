import axios from 'axios'

export const getApi = (site = process.env.REACT_APP_API) => {
	const token = localStorage.getItem('token')

	const instance = axios.create({
		baseURL: site,
		withCredentials: false,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			Accept: 'application/ld+json',
		},
	})

	instance.interceptors.request.use(function (config) {
		// @ts-ignore
		config.headers.Authorization = 'Bearer ' + token
		return config
	})

	instance.interceptors.response.use(
		function (response) {
			localStorage.setItem('x-jwt-token', response.headers['x-jwt-token'])
			return response
		},
		function (error) {
			return Promise.reject(error)
		},
	)

	return instance
}
