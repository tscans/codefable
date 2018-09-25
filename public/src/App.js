import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Util from './util/Util';
import firebase from 'firebase';
import axios from 'axios';
import {LinearProgress,Divider} from '@material-ui/core';

import { Merge } from "animate-components";
import { fadeIn } from "animate-keyframes";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from './components/common/Header';

import Landing from './components/screens/Landing';
import EditorPage from './components/screens/EditorPage';

import red from '@material-ui/core/colors/red';
//red C8102E
//gray A5A7A8

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#C8102E',
    },
    secondary: {
      main: '#A5A7A8',
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  shadows: ["none"]
});

const routes = [
	{
		path: "/",
		component: Landing
	},
	{
		path: "/editor",
		component: EditorPage
	}
];

var paths = [];
for(var i = 0; i < routes.length; i++){
    paths.push(routes[i].path);
}

class App extends React.Component{
	state = {
		loggedIn: null,
		userObject: null
	}
	componentWillMount(){
		var config = {
		    apiKey: "AIzaSyCGWdYRo8I6Duu3Jdo42ib8Zs56kSue6fs",
		    authDomain: "codefableapp.firebaseapp.com",
		    databaseURL: "https://codefableapp.firebaseio.com",
		    projectId: "codefableapp",
		    storageBucket: "codefableapp.appspot.com",
		    messagingSenderId: "727604471629"
		};
		firebase.initializeApp(config);
		var self = this;
	    firebase.auth().onAuthStateChanged(function(user) {
	        if (user) {
	        	self.setState({loggedIn: true, userObject: user});
	        }
	        else{
	        	self.setState({loggedIn: false, userObject: null});
	        	firebase.auth().signOut();
	        }
	    });
	}
	limbo = () =>{
	    //this.setState({loggedIn: null})
	}
	renderPage(props,Component,state) {
	    props = Object.assign(props, state);
	    Util.cs = props;
	    Util.limbo = this.limbo;
	    var phlp = props.history.location.pathname;
	    return(
	    	<div>
		        <Merge
		        	one={{ name: fadeIn, duration: "0.6s", timingFunction: "ease-in" }}
		        	as="div"
		        >
		        	<Component {...props} {...this.props} />
		        </Merge>
	        </div>
	    )
	}
	renderRoutes = () =>{
	    return routes.map(r=>{
	        return(
	        	<div key={r.path}>
		        	<Route
		            	exact 
		            	path={r.path}
		            	render={(props) => this.renderPage(props, r.component, this.state)}
		        	/>
	        	</div>
	        )
	    })
	}
	render(){
		if(this.state.loggedIn === null){
	        return(
	            <div style={{backgroundColor:"white",height:"100vh"}}>
		            <MuiThemeProvider theme={muiTheme}>
				        <div>
					        <LinearProgress color="primary"/>
					        <div style={styles.loader}>
					        	<img src="/images/cf400.png" width={window.innerWidth>600?"40%":"90%"}/>
					        	<h1 style={{color:"#C8102E"}}>CodeFable</h1>
					        </div>
				        </div>
			        </MuiThemeProvider>
	            </div>
	        )
	    }
	    return(
	        <Router>
		        <MuiThemeProvider theme={muiTheme}>
			        <div>
			        	{this.renderRoutes()}
			        </div>
		        </MuiThemeProvider>
	        </Router>
	    )
	}
}

const styles = {
    loader: {
	    display: 'block',
	    justifyContent: 'center',
	    alignItems: 'center',
	    textAlign: 'center',
	    marginTop: '15vh'
    }
}

export default App;