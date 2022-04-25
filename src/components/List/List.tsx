import { List as MyList } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Accordion from './Accordion'
import { IAccordion } from '../../types/accordionType'
import { FC } from 'react'

const List: FC = () => {
	const accordionItems: IAccordion[] = [
		{
			title: 'Справочники',
			img: <MenuBookIcon />,
		},
		{
			title: 'Заказы',
			img: <ShoppingCartIcon />,
		},
	]

	return (
		<MyList sx={{ padding: '0' }}>
			{accordionItems.map(item => (
				<Accordion key={item.title} {...item} />
			))}
		</MyList>
	)
}

export default List
