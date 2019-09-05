function App(props){
	const [data, setData] = React.useState(props.data)
	const [filteredName, setFilteredName] = React.useState('')
	const [sortBy, setSortBy] = React.useState('')
	const [sortOrder, setSortOrder] = React.useState(1)

	function updateFilteredName(newFilteredName){
		setFilteredName(newFilteredName)
	}

	function updateSortBy(sortByColumn){
		setSortBy(sortByColumn)
	}

	function updateSortOrder(sortOrder){
		setSortOrder(sortOrder)
	}

	return(
		<React.Fragment>
			<Header title='NFL Rushing Project' />

			<Filter 
				filteredName={filteredName}
				updateFilteredName={updateFilteredName}
			/>

			<CSVExportButton
				sortBy={sortBy}
				filteredName={filteredName} 
			/>

			<Table 
				data={data}
				header={props.header}
				filteredName={filteredName}
				sortBy={sortBy}
				sortOrder={sortOrder}
				updateSortBy={updateSortBy}
				updateSortOrder={updateSortOrder}
			/>
		</React.Fragment>
	)
}