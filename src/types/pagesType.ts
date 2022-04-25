export interface IHeadCells {
	value?: string
	label: string
}

interface IRowDriversItem {
	lastname: string
	firstname: string
	patronymic: string
	sex: boolean
	birthDate: string
	active: boolean
}

interface IRowCitiesItem {
	shortName: string
	name: string
	officialName: string
	okato: string
	oktmo: string
	latitude: string
	longtitude: string
}

interface IRowPeopleItem {
	lastname: string
	firstname: string
	patronymic: string
	phone: string
	email: string
	sex: boolean
	documents: IRowPeopleDocuments[]
	birthdate: string
}

interface IRowPeopleDocuments {
	serial: string
	number: string
}

interface IRowDirectionsItem {
	name: string
	shortName: string
}

export interface IRowDrivers {
	headCells: IHeadCells[]
	row: IRowDriversItem
}

export interface IRowDirections {
	headCells: IHeadCells[]
	row: IRowDirectionsItem
}

export interface IRowCities {
	headCells: IHeadCells[]
	row: IRowCitiesItem
}

export interface IRowPeople {
	headCells: IHeadCells[]
	row: IRowPeopleItem
}

export interface IInput {
	name: string
	label: string
}
export interface IPagesProps {
	inputs: IInput[]
	headCells: IHeadCells[]
	Row: React.ReactChild | React.ReactNode
	initialState: any
	path: string
	site?: string
}
