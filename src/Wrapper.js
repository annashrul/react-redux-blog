import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from "./component/Contact";
import About from "./component/About";
import Post from "./component/Post";
class Wrapper extends Component{
	render(){
		return(
			<BrowserRouter>
				<div className="Wrapper">
					<Navbar/>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/contact" component={Contact}/>
						<Route path="/about" component={About}/>
						<Route path="/:post_id" component={Post}/>
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}
export default Wrapper;
