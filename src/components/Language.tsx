import { useEffect, useState } from 'react'
import { MenuItem, FormControl, Select } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Language = () => {
	const [language, setLanguage] = useState('ru')
	const { i18n } = useTranslation()

	const changeLanguage = (e: { target: { value: any } }) => {
		const value = e.target.value
		setLanguage(value)
		i18n.changeLanguage(value)
	}

	useEffect(() => {
		//@ts-ignore
		if (localStorage.getItem('i18nextLng')) {
			const localStoreLang = localStorage.getItem('i18nextLng')
			//@ts-ignore
			i18n.changeLanguage(localStoreLang)
			//@ts-ignore
			setLanguage(localStoreLang)
		}
	}, [])

	return (
		<FormControl sx={{ minWidth: '100px' }}>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={language}
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
