// import { useEffect, useState } from 'react'
// import flagIcons from 'flag-icons'
// import { Box, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
// import { useTranslation } from 'react-i18next'

// const Language = () => {
// 	const [language, setLanguage] = useState('ru')
// 	const { i18n } = useTranslation()
// 	console.log(i18n)

// 	const changeLanguage = e => {
// 		const value = e.target.value
// 		setLanguage(value)
// 		i18n.changeLanguage(value)
// 	}

// 	useEffect(() => {
// 		if (localStorage.getItem('i18nextLng')) {
// 			const localStoreLang = localStorage.getItem('i18nextLng')
// 			i18n.changeLanguage(localStoreLang)
// 			setLanguage(localStoreLang)
// 		}
// 	}, [])

// 	return (
// 		<FormControl sx={{ minWidth: '100px' }}>
// 			<Select
// 				labelId='demo-simple-select-label'
// 				id='demo-simple-select'
// 				value={language}
// 				label='Language'
// 				onChange={changeLanguage}
// 			>
// 				<MenuItem value='ru'>Ru</MenuItem>
// 				<MenuItem value='en'>En</MenuItem>
// 				<MenuItem value='de'>De</MenuItem>
// 			</Select>
// 		</FormControl>
// 	)
// }

// export default Language
