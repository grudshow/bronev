export const onlyNotEmpty = (params: {}) => {
	return Object.fromEntries(
		Object.entries(params).filter(([_, v]) => v !== null && v !== '' && v !== 0),
	)
}
