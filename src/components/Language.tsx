import { useEffect, useState } from 'react'
import { MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Language = () => {
	const [language, setLanguage] = useState<string | null>('')
	const { i18n } = useTranslation()

	const changeLanguage = (e: SelectChangeEvent) => {
		const value = e.target.value as string
		setLanguage(value)
		i18n.changeLanguage(value)
	}

	useEffect(() => {
		setLanguage(localStorage.getItem('i18nextLng'))
		i18n.changeLanguage(language as string)
	}, [])

	return (
		<FormControl sx={{ minWidth: '100px' }}>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={language as string}
				label='Language'
				onChange={changeLanguage}
			>
				<MenuItem value='ru'>Ru</MenuItem>
				<MenuItem value='en'>En</MenuItem>
				<MenuItem value='de'>De</MenuItem>
			</Select>
		</FormControl>
	)
}

export default Language
