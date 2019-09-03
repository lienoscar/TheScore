function Header(props) {
	return(
		<React.Fragment>
			<div className='has-text-primary has-text-centered is-size-1'>{props.title}</div>
			<hr className='hr' style={{marginTop:'0px'}}></hr>
		</React.Fragment>
	)
}