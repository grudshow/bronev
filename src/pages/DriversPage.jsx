import React from 'react'
import EnhancedTable from '../components/Table'
import BreadCrumbs from '../components/BreadCrumbs'

const DriversPage = () => {
	return (
		<>
			<BreadCrumbs breadcrumbs='Список водителей' path='/drivers' />
			<EnhancedTable />
		</>
	)
}

export default DriversPage
