function CSVExportButton(props){

	const [message, setMessage] = React.useState('')
	const [token, setToken] = React.useState('')

	function formSubmit(e){
		let token = document.getElementsByName('csrf-token')[0].getAttribute('Content')
		setToken(token)
	}

	return(
		<React.Fragment>
			<div className='columns'>
				<div className='column is-4 is-offset-4'>
					<form action='/home/export_csv.csv' method='post'>
						<input type="hidden" name="authenticity_token" value={token}/>
						<input type="hidden" name="sort_by" id="sort_by" value={props.sortBy} />
						<input type="hidden" name="sort_order" id="sort_order" value={props.sortOrder} />
						<input type="hidden" name="filtered_name" id="filtered_name" value={props.filteredName}/>
						<button className='button is-primary is-fullwidth' onClick={formSubmit}>Download File (CSV)</button>
					</form>
					<p className='has-text-primary has-text-centered'>{message}</p>
				</div>
			</div>
		</React.Fragment>
	)
}