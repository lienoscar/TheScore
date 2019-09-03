function Row(props){

	function show(columns){		
		return columns['Player'].includes(props.filteredName) ? true : false
	}

	return(
		<React.Fragment> 
			<tr className={ show(props.columns) ? '' : 'is-hidden' }>
				{ Object.keys(props.columns).map((key, index) => 
					<td key={index}>{props.columns[key]}</td>
				)}
			</tr>
		</React.Fragment>
	)
}

