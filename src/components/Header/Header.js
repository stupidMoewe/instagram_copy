import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Header.module.css';
import Modal from '../../hoc/Modal/Modal';

class Header extends Component {
	state = {
		modalShow: false
	};
	render() {
		return (
			<div className={classes.Header}>
				<Link to="/" className={classes.Title}>
					Instagram
				</Link>

				<div className={classes.Input}>
					<input placeholder="Search" />
				</div>

				<div className={classes.User} onClick={() => this.setState({ modalShow: !this.state.modalShow })}>
					<p>{this.props.username}</p>
				</div>
				
				<Modal show={this.state.modalShow} onCancel={() => this.setState({ modalShow: false })} header="Login">
					<input type="text" placeholder="email" />
					<input type="text" placeholder="password" />
				</Modal>
			</div>
		);
	}
}

const mainStateToProps = (state) => {
	return {
		username: state.auth.username,
		profilPicture: state.auth.profilPicture
	};
};

export default connect(mainStateToProps)(Header);
