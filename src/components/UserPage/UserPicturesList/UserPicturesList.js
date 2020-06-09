import React, { Component } from 'react';

import Picture from './Picture/Picture';
import * as DUMMY from '../../Dummy/DummyData';
import classes from './UserPicturesList.module.css';
import axios from 'axios';
// import * as firebase from 'firebase';

// var app = firebase.initializeApp();
// var otherDatabase = firebase.database(app);
class UserPicturesList extends Component {
	render() {
		let userPictures = <h1>No picture</h1>;
		
		return <div className={classes.UserPictures}>{userPictures}</div>;
	}
}

export default UserPicturesList;
