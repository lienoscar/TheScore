function Table(props){

	const [data, setData] = React.useState(props.data)
	const [sortBy, setSortBy] = React.useState('')
	const [sortOrder, setSortOrder] = React.useState('desc')

	function sort(header){
		if(['Yds', 'Lng', 'TD'].includes(header)){
			let dataSort = [...data]
			dataSort.sort((a,b) => String(a[header]).replace(/[,T]/g, '') - String(b[header]).replace(/[,T]/, ''))
			setData(dataSort)
			props.updateSortBy(header)
		}
	}

	return(
		<React.Fragment>
			<div className='columns'>
				<div className='column is-full'>
					<table className='table is-striped is-fullwidth'>
						<thead>
							<tr>
								{ props.header.map( (header, index) => (<th key={index} onClick={() => sort(header)}>{header}</th>)) }<td></td>					
							</tr>
						</thead>
						<tfoot>
							<tr>
								{ props.header.map( (header, index) => (<th key={index} onClick={() => sort(header)}>{header}</th>)) }<td></td>				
							</tr>
						</tfoot>
						<tbody>
								{ Object.values(data).map((columns, index) =>
									<Row
										key={index}
										columns={columns}
										filteredName={props.filteredName}
									/>
								)}
						</tbody>
					</table>
				</div>
			</div>
		</React.Fragment>
	)
}