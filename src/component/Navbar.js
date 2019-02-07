import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import gambar from '../background.png';
const Navbar = (props) => {
	// console.log(props);
	return(
		<div>
		<div className="navbar-fixed">
			<nav className="nav-wrapper blue darker-3">
				<div className="container">
					<img src={gambar} alt="" className="logoNav"/>
					
					<Link to="/" className="brand-logo textLogoNav">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kemping<br/><span>ode</span></Link>
					<Link to="/" href="#" data-target="mobile-demo" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</Link>
					<ul className="right hide-on-med-and-down"  id="nav-mobile">
						<li><Link to="/">Home</Link></li>
						<li><NavLink to="/about">About</NavLink></li>
						<li><NavLink to="/contact">Contact</NavLink></li>
					</ul>
				</div>
			</nav>
		</div>
		<div>
			<ul className="sidenav" id="mobile-demo">
				<li><Link to="/">Home</Link></li>
				<li><NavLink to="/about">About</NavLink></li>
				<li><NavLink to="/contact">Contact</NavLink></li>
			</ul>
		</div>
		</div>
	)
};

export default withRouter(Navbar);