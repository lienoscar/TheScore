function Filter(props){
	const [filteredName, setFilteredName] = React.useState(props.filteredName || '')

	function handleInput(e){
		setFilteredName(e.target.value)
		props.updateFilteredName(e.target.value)
	}

	return(
		<React.Fragment>
			<div className='columns'>
				<div className='column is-4 is-offset-4'>
					<input className='input' type='text' placeholder='Name filter (Case sensitive)' value={filteredName} onChange={handleInput} />
				</div>
			</div>
		</React.Fragment>
	)
}