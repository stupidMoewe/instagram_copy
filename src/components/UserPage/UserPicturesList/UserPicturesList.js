import React, { Component } from 'react';
import { connect } from 'react-redux';

import Picture from './Picture/Picture';

import * as actions from 'store/actions';
import classes from './UserPicturesList.module.css';

class UserPicturesList extends Component {
	componentDidMount() {
		this.props.fetchUserImages(this.props.userId);
	}
	render() {
		let arrayOfImages = [];
		if (this.props.items) {
			arrayOfImages = this.props.items;
		}
		const userPictures = arrayOfImages.map((image, index) => {
			return <Picture image={image} key={index}/>;
		});
		return (
			<div className={classes.UserPictures} style={{ marginTop: '3rem' }}>
				{userPictures}
			</div>
		);
	}
}

const mapPropsToState = (state) => {
	return {
		items: state.pictures.pictures,
		userId: state.auth.userId
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUserImages: (userId) => dispatch(actions.fetchUserImages(userId))
	};
};

export default connect(mapPropsToState, mapDispatchToProps)(UserPicturesList);
