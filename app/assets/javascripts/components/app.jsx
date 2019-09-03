function App(props){
	const [data, setData] = React.useState(props.data)
	const [filteredName, setFilteredName] = React.useState('')
	const [sortBy, setSortBy] = React.useState('')

	function updateFilteredName(newFilteredName){
		setFilteredName(newFilteredName)
	}

	function updateSortBy(sortByColumn){
		setSortBy(sortByColumn)
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
				updateSortBy={updateSortBy}
			/>
		</React.Fragment>
	)
}