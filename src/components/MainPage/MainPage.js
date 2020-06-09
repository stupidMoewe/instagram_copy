import React, { Component } from 'react';
import { connect } from 'react-redux';

import Elements from './Elements/Elements';
import SideUser from './SideUser/SideUser';
import classes from './MainPage.module.css';

class MainPage extends Component {
	render() {
		return (
			<div className={classes.MainPage}>
				<div className={classes.Elements}>
					<Elements />
				</div>
				<div className={classes.SideUser}>
					<SideUser
						user={this.props.username}
						profilPicture={this.props.profilPicture}
						userId={this.props.userId}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		profilPicture: state.profilPicture,
		username: state.username,
		userId: state.userId
	};
};

export default MainPage;
