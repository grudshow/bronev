import MyPagination from '@mui/material/Pagination'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks/hooks'
import { dataType } from '../store/data/dataType'

const Pagination = () => {
	const page = useAppSelector(state => state.dataReducer.page)
	const pageQty = useAppSelector(state => state.dataReducer.pageQty)
	const dispatch = useDispatch()

	const handlePage = (e: React.ChangeEvent<unknown>, value: number) => {
		dispatch({ type: dataType.SET_PAGE, payload: value })
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
