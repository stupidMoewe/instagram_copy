import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './SideUser.module.css';

const SideUser = (props) => (
	<div className={classes.SideUser}>
		<div className={classes.Picture}>
			<img src={props.profilPicture} />
		</div>
		<div className={classes.User}>
			<p>{props.user}</p>
		</div>
		<Link to={`/${props.userId}/newpicture`}>
			<h4>Add a picture</h4>
		</Link>
	</div>
);

const mapStateToProps=(state)=>{
	return {
		profilPicture: state.auth.profilPicture,
		user: state.auth.username,
		userId: state.auth.userId
	}
}

export default connect(mapStateToProps)(SideUser);
