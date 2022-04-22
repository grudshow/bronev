import MyPagination from '@mui/material/Pagination'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks/hooks'
import { setPage } from '../store/data/dataAction'

const Pagination = () => {
	const page = useAppSelector(state => state.dataReducer.page)
	const pageQty = useAppSelector(state => state.dataReducer.pageQty)
	const dispatch = useDispatch()

	const handlePage = (event: any, value: any) => {
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
