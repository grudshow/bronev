import MyPagination from '@mui/material/Pagination'
import { useSelector } from 'react-redux'

const Pagination = ({ handlePage }) => {
	const page = useSelector(state => state.dataReducer.page)
	const pageQty = useSelector(state => state.dataReducer.pageQty)
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
