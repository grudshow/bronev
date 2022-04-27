import { FC } from 'react'
import Content from '../components/Content'
import { IHeadCells, IInput } from '../types/pagesType'
import { IQuerySearch } from '../store/data/dataType'

const DirectionsPage: FC = () => {
	const initialState: IQuerySearch = {
		name: '',
	}

	const headCells: IHeadCells[] = [
		{
			value: 'name',
			label: 'Наименование',
		},
		{
			value: 'shortName',
			label: 'Сокращение',
		},
	]

	const inputs: IInput[] = [{ name: 'name', label: 'Поиск по Наименованию' }]

	return (
		<Content
			inputs={inputs}
			headCells={headCells}
			initialState={initialState}
			path='dictionary/directions'
		/>
	)
}

export default DirectionsPage
