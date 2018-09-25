import React from 'react';

class WebFrame extends React.Component{
	render(){
		return(
			<div style={{backgroundColor:'white'}}>
				<iframe 
					src={`/bla.html`} 
					style={{height:"calc(100vh - 50px)"}} 
					width="100%"
					frameBorder="0"
				>
				</iframe>
			</div>
		)
	}
}

export default WebFrame;