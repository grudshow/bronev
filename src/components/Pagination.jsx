import MyPagination from '@mui/material/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../store/actions/dataAction'

const Pagination = () => {
	const page = useSelector(state => state.dataReducer.page)
	const pageQty = useSelector(state => state.dataReducer.pageQty)
	const dispatch = useDispatch()

	const handlePage = (event, value) => {
		dispatch(setPage(value))
	}

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
