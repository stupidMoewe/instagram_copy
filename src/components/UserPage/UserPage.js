import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from 'store/actions';
import UserPicturesList from './UserPicturesList/UserPicturesList';
//import pictures from 'store/reducers/pictures';

class UserPage extends Component {
	state = {
		loadedPictures: null,
		creatorId: this.props.match.params.creatorId
	};

	componentDidMount() {
		this.props.fetchUserImages(this.state.creatorId);
		// const response = await fetch(`http://localhost:5000/api/pictures/user/${this.state.creatorId}`)
		// const responseData = await response.json();
		// this.setState({loadedPictures: responseData});
	}

	render() {
		return (
			<div>
				<h1>{this.state.userId}</h1>
				<UserPicturesList userId={this.state.userId} />
			</div>
		);
	}
}

const displayPropsToState = (state) => {
	return {
		userPictures: state.pictures
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUserImages: (userId) => dispatch(actions.fetchUserImages(userId))
	};
};

export default connect(displayPropsToState, mapDispatchToProps)(withRouter(UserPage));
