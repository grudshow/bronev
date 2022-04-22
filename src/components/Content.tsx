import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getData, setQuerySearch } from '../store/data/dataAction'
import Pagination from './Pagination'
import Input from './Input/Input'
import Select from './Select/Select'
import Buttons from './Buttons/Buttons'
import Loading from './Loading'
import { Box } from '@mui/material'
import { useAppSelector } from '../hooks/hooks'
import { IPagesProps } from '../pages/pagesType'
import Table from './Table/Table'

const Content = ({ inputs, headCells, Row, initialState, path, site }: IPagesProps) => {
	const dispatch = useDispatch()

	const querySearch = useAppSelector(state => state.dataReducer.querySearch)
	const page = useAppSelector(state => state.dataReducer.page)
	const submit = useAppSelector(state => state.dataReducer.submit)
	const data = useAppSelector(state => state.dataReducer.data)
	const pageQty = useAppSelector(state => state.dataReducer.pageQty)

	// @ts-ignore
	const handleSearch = e => {
		// @ts-ignore
		const name = e.target.name
		// @ts-ignore
		dispatch(setQuerySearch({ ...querySearch, [name]: e.target.value }))
	}

	useEffect(() => {
		// @ts-ignore
		dispatch(getData(page, querySearch, path, site))
	}, [page, submit])

	useEffect(() => {
		// @ts-ignore
		dispatch(setQuerySearch(initialState))
	}, [])

	return !data ? (
		<Loading />
	) : (
		<>
			<Box>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit,minmax(100px,1fr))',
						gap: '20px',
						marginBottom: '20px',
					}}
				>
					<Input inputs={inputs} handleSearch={handleSearch} />
					{'show_all' in querySearch && <Select handleSearch={handleSearch} />}
				</Box>
				<Buttons initialState={initialState} />
			</Box>
			<Table headCells={headCells} Row={Row} data={data} />
			{pageQty !== 1 && <Pagination />}
		</>
	)
}

export default Content
