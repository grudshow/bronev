export interface IHeadCells {
	value: string
	label: string
}

export interface IRow {
	row: any
	headCells: IHeadCells[]
}
	
export interface IPagesProps {
	inputs: object
	headCells: IHeadCells[]
	Row: React.ReactChild | React.ReactNode
	initialState: {}
	path: string
	site?: string
}
