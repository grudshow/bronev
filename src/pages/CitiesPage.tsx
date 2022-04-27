import { FC } from 'react'
import Content from '../components/Content'
import { IHeadCells, IInput } from '../types/pagesType'
import { IQuerySearch } from '../store/data/dataType'

const CitiesPage: FC = () => {
	const initialState: IQuerySearch = {
		name: '',
		okato: '',
		oktmo: '',
		shortName: '',
	}

	const headCells: IHeadCells[] = [
		{
			value: 'shortName',
			label: 'Сокращения',
		},
		{
			value: 'name',
			label: 'Наименование',
		},
		{
			value: 'officialName',
			label: 'Оф.наименование',
		},
		{
			value: 'okato',
			label: 'Окато',
		},
		{
			value: 'oktmo',
			label: 'Октмо',
		},
		{
			value: 'latitude',
			label: 'Долгота',
		},
		{
			value: 'longtitude',
			label: 'Широта',
		},
	]

	const inputs: IInput[] = [
		{ name: 'name', label: 'Поиск по Наименованию' },
		{ name: 'shortName', label: 'Поиск по Сокращению' },
		{ name: 'okato', label: 'Поиск по ОКАТО' },
		{ name: 'oktmo', label: 'Поиск по ОКТМО' },
	]

	return (
		<Content
			initialState={initialState}
			inputs={inputs}
			headCells={headCells}
			path='cities'
			site='https://svida.routeam.ru/api/'
		/>
	)
}

export default CitiesPage
