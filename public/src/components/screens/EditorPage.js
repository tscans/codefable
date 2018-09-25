import React from 'react';
import Header from '../common/Header';
import WebFrame from '../editor/WebFrame';

class EditorPage extends React.Component{
	render(){
		return(
			<div>
				<Header/>
				<div style={{height: "calc(100vh - 50px)",backgroundColor:'red'}}>
					<div style={{height:"100%",backgroundColor:'green',float:'left',width:"50%"}}>
						<div style={{height: 50, backgroundColor:'blue'}}>

						</div>
					</div>
					<div style={{height:"100%",backgroundColor:'orange',float:'right',width:"50%"}}>
						<WebFrame/>
					</div>
				</div>
			</div>
		)
	}
}

export default EditorPage;