import { FC } from 'react'
import Content from '../components/Content'
import { IHeadCells, IInput } from '../types/pagesType'
import { IQuerySearch } from '../store/data/dataType'

const DriversPage: FC = () => {
	const initialState: IQuerySearch = {
		firstname: '',
		lastname: '',
		patronymic: '',
		show_all: '',
	}

	const headCells: IHeadCells[] = [
		{
			value: 'lastname',
			label: 'Фамилия',
		},
		{
			value: 'firstname',
			label: 'Имя',
		},
		{
			value: 'patronymic',
			label: 'Отчество',
		},
		{
			value: 'sex',
			label: 'Пол',
		},
		{
			value: 'birthDate',
			label: 'Дата рождения',
		},
		{
			value: 'active',
			label: 'Активность',
		},
	]

	const inputs: IInput[] = [
		{ name: 'firstname', label: 'Поиск по Имени' },
		{ name: 'lastname', label: 'Поиск по Фамилии' },
		{ name: 'patronymic', label: 'Поиск по Отчеству' },
	]

	return (
		<Content
			inputs={inputs}
			headCells={headCells}
			initialState={initialState}
			path='dictionary/drivers'
		/>
	)
}

export default DriversPage
