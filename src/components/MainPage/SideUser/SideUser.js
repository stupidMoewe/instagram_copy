import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import classes from './SideUser.module.css';

const SideUser = (props) => {
	// let sideUser = (<div>
	// 	<Button>
	// 		Register
	// 	</Button>
	// </div>);
	let sideUser;
	if (props.user) {
		sideUser = (
			<React.Fragment>
				<div className={classes.UserMainInfo}>
					<Link to={`/${props.userId}`}>
						<div className={classes.Picture}>
							<img src={props.profilPicture} />
						</div>
						<div className={classes.User}>
							<p>{props.user}</p>
						</div>
					</Link>
				</div>
				<div className={classes.AddPicture}>
					<Link to={`/${props.userId}/newpicture`}>
						<h4>Add a picture</h4>
					</Link>
				</div>
			</React.Fragment>
		);
	}
	return <div className={classes.SideUser}>{sideUser}</div>;
};

const mapStateToProps = (state) => {
	return {
		profilPicture: state.auth.profilPicture,
		user: state.auth.username,
		userId: state.auth.userId
	};
};

export default connect(mapStateToProps)(SideUser);
