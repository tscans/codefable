import React from 'react';
import {AppBar,Toolbar,Typography,IconButton,
	Drawer,List,ListItem,ListItemText,ListItemIcon,
	Button,Divider} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import Util from '../../util/Util';

class Header extends React.Component{
	state = {
		open: false
	}
	toggleDrawer = (close) =>{
		this.setState({open: close===true?false:!this.state.open});
	}
	menuItemRender = () =>{
		var items = [
			{
				item: "CodeFable",
				route: "/",
				Component: <HomeIcon />
			},
			{
				item: "Editor",
				route: "/editor",
				Component: <CreateIcon/>
			}
		];
		return items.map((i)=>{
			let Component = i.Component;
			return(
				<ListItem button onClick={()=>Util.cs.history.push(i.route)} key={i.route}>
					<ListItemIcon>
			            {Component}
			        </ListItemIcon>
					<ListItemText primary={i.item} />
				</ListItem>
			)
		})
	}
	render(){
		console.log(Util.cs)
		return(
			<div style={{flexGrow: 1}}>
				<AppBar position="static">
					<Toolbar variant="dense" style={{backgroundColor:'white'}}>
						<div>
							<IconButton aria-label="Menu" onClick={this.toggleDrawer}>
								<MenuIcon />
							</IconButton>
						</div>
						<div style={{flexGrow:1,textAlign:'center'}}>
							<Button variant="outlined" size="small" color="primary">
					        	Small
					        </Button>
						</div>
						<div>
							<Typography variant="title" style={{color:"#C8102E"}}>
								CodeFable
							</Typography>
						</div>
					</Toolbar>
				</AppBar>
				<Divider/>
				<Drawer open={this.state.open} onClose={()=>this.toggleDrawer(true)}>
					<List style={{width:250}}>
						{this.menuItemRender()}
					</List>
				</Drawer>
			</div>
		)
	}
}

export default Header;