import React, { Component } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import {connect } from 'react-redux';

import UserPicturesList from './UserPicturesList/UserPicturesList';

class UserPage extends Component {
	state = {
		loadedPictures:null,
		creatorId: this.props.match.params.creatorId
	}

	async componentDidMount(){
		const response = await fetch(`http://localhost:5000/api/pictures/user/${this.state.creatorId}`)
		const responseData = await response.json();
		this.setState({loadedPictures: responseData});
		console.log(this.state.loadedPictures);
	}

	render() {
		console.log(this.state.creatorId);
		return (
			<div>
				<h1>{this.state.creatorId}</h1>
				<UserPicturesList userId={this.state.creatorId} />
			</div>
		);
	}
}

export default withRouter(UserPage);
