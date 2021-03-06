import React, { Component } from 'react'; 
import API from '../../utils/API';
import './Header.css'; 
import Wrapper from '../Wrapper';
import Button from '@material-ui/core/Button';
// import Button from '@material/react-button/dist'; // /index.js is implied
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	logoutButton: {
		color: '#f9f9f9',
		border: '1px solid #f9f9f9',
	}
}
class Header extends Component {
	state = {
		navHamClicked: false
	};

	logout = () => {
		API.logout().then(response => {
			console.log(response.data);
			if (response.status === 200) {
				this.props.updateUser({
					loggedIn: false,
					hasCustomerAccount: false,
					hasSubscription: false,
					email: null,
					firstName: null,
					lastName: null,
					userId: null
				});
			}
		}).catch(err => {
			console.log(`Logout error: ${err}`);
		});
	}

	handleNavHamClick = () => {
		this.setState({ navHamClicked: !this.state.navHamClicked});
	}

	render() {
		return (
			<nav className={this.props.page !== "home"? "navbar navbar-expand-lg navbar-gradient" : "navbar navbar-expand-lg"}>
				<Wrapper>
				<a className="navbar-brand" href="/">Love Foundation</a>
				<button className={this.state.navHamClicked ? "navbar-toggler change" : "navbar-toggler"} onClick={this.handleNavHamClick} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					{/* <span className="navbar-toggler-icon"></span> */}
					<div className="bar1"></div>
					<div className="bar2"></div>
					<div className="bar3"></div>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className={this.props.page !== "home"? "nav-item" : "nav-item active"}>
							<Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
						</li>
						<li className={this.props.page !== "about"? "nav-item" : "nav-item active"}>
							<Link to="/about" className="nav-link">About</Link>
						</li>
						<li className={this.props.page !== "donations"? "nav-item" : "nav-item active"}>
							<Link to="/donations" className="nav-link">Donations</Link>
						</li>
						{this.props.userInfo.loggedIn ? (
							<li className={this.props.page !== "settings"? "nav-item" : "nav-item active"}>
								<Link to="/settings" className="nav-link" href="/settings">Settings</Link>
							</li>
						) : ( 
							<div></div>
						)}
						<li className={this.props.page !== "login"? "nav-item" : "nav-item active"}>
							{this.props.userInfo.loggedIn ? (	
								<Button className={this.props.classes.logoutButton + " nav-link"} variant="outlined" onClick={this.logout}>Logout</Button>
							) : (
								<Link to="/login" className="nav-link">Login</Link>
							)}
						</li>
					</ul>
				</div>
				
				</ Wrapper>
			</nav>
		);
	}
}

export default withStyles(styles)(Header); 