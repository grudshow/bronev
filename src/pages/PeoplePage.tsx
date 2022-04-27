import { FC } from 'react'
import Content from '../components/Content'
import { IHeadCells, IInput } from '../types/pagesType'
import { IQuerySearch } from '../store/data/dataType'

const PeoplePage: FC = () => {
	const initialState: IQuerySearch = {
		FIO: '',
		document: '',
		phone: '',
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
			value: 'phone',
			label: 'Телефон',
		},
		{
			value: 'email',
			label: 'E-mail',
		},
		{
			value: 'sex',
			label: 'Пол',
		},
		{
			value: 'documents',
			label: 'Серия и номер паспорта',
		},
		{
			value: 'birthdate',
			label: 'Дата рождения',
		},
	]

	const inputs: IInput[] = [
		{ name: 'FIO', label: 'Поиск по ФИО' },
		{ name: 'document', label: 'Поиск по серии или номеру документа' },
		{ name: 'phone', label: 'Поиск по Телефон' },
	]

	return (
		<Content
			inputs={inputs}
			headCells={headCells}
			initialState={initialState}
			path='people/people/smart-search'
		/>
	)
}

export default PeoplePage
