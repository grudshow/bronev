import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../store/data/dataAction'
import Pagination from './Pagination'
import Input from './Input'
import Select from './Select'
import Buttons from './Buttons'
import Loading from './Loading'
import { Box } from '@mui/material'
import { useAppSelector } from '../hooks/hooks'
import { IPagesProps } from '../types/pagesType'
import Table from './Table'
import { dataType } from '../store/data/dataType'

const Content: FC<IPagesProps> = ({ inputs, headCells, Row, initialState, path, site }) => {
	const dispatch = useDispatch()
	console.log('initialState', initialState)

	const querySearch = useAppSelector(state => state.dataReducer.querySearch)
	const page = useAppSelector(state => state.dataReducer.page)
	const submit = useAppSelector(state => state.dataReducer.submit)
	const data = useAppSelector(state => state.dataReducer.data)
	const pageQty = useAppSelector(state => state.dataReducer.pageQty)

	useEffect(() => {
		dispatch(getData(page, querySearch, path, site))
	}, [page, submit])

	useEffect(() => {
		dispatch({ type: dataType.SET_QUERY_SEARCH, payload: initialState })
		console.log(querySearch)
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
					{inputs.map(input => (
						<Input key={input.name} {...input} />
					))}
					{'show_all' in querySearch && <Select />}
				</Box>
				<Buttons initialState={initialState} />
			</Box>
			<Table headCells={headCells} Row={Row} data={data} />
			{pageQty !== 1 && <Pagination />}
		</>
	)
}

export default Content
