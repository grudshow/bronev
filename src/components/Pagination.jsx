import MyPagination from '@mui/material/Pagination'
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../store/actions/dataAction'

const Pagination = () => {
	const page = useSelector(state => state.dataReducer.page)
	const pageQty = useSelector(state => state.dataReducer.pageQty)
	const dispatch = useDispatch()

	const handlePage = (event, value) => {
		dispatch(setPage(value))
	}

=======
import { useSelector } from 'react-redux'

const Pagination = ({ handlePage }) => {
	const page = useSelector(state => state.dataReducer.page)
	const pageQty = useSelector(state => state.dataReducer.pageQty)
>>>>>>> e56e7f6c9c00ef25c163b9e00791d1847039f73c
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
