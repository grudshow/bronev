import { List as MyList } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Accordion from './Accordion'

const List = () => {
	const accordionItems = [
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
				<Accordion key={item.title} item={item} />
			))}
		</MyList>
	)
}

export default List
