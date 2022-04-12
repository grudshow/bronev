import MyPagination from '@mui/material/Pagination'

const Pagination = ({ page, pageQty, handlePage }) => {
	return (
		<MyPagination
			count={pageQty}
			page={page}
			sx={{ display: 'flex', justifyContent: 'center' }}
			onChange={handlePage}
		/>
	)
}

export default Pagination
