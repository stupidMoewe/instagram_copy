import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AddPicture.module.css';

class AddPicture extends Component {
	state = {
        imageInput: '',
        isLoaded: false,
        items: null
	};

	handleChange = (event) => {
		this.setState({ imageInput: event.target.value });
	};

	submitHandler = (event) => {
		event.preventDefault();
		// post the new picture
		const request = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ imageURL: this.state.imageInput, userId: this.props.userId })
		};
		fetch('http://localhost:5000/api/pictures/newpicture', request).then((response) => response.json());
		this.setState({ imageInput: '' });

		// Update of the user pictures field
		// const requestUpdateUser = {
		// 	headers: { 'Content-Type': 'application/json' },
		// 	method: 'PATCH',
		// 	body: JSON.stringify({
		// 		pictures: pictures
		// 	})
		// };
		// fetch(`http://localhost:5000/api/users/update/${this.props.userId}`, requestUpdateUser).then((response) =>
		// 	response.json()
		// );
		// this.setState({ imageInput: '' });
	};

	render() {
		return (
			<div className={classes.InputFrame}>
				<h1>Add a new picture</h1>
				<hr />
				<p>Url of the image : </p>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							placeholder="add sth"
							value={this.state.imageInput}
							onChange={this.handleChange}
						/>
					</div>
					<input type="Submit" value="Submit"/> 
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userId: state.auth.userId
	};
};

export default connect(mapStateToProps)(AddPicture);
