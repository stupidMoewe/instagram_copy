import React from 'react';
import {Link} from 'react-router-dom';

import classes from './SideUser.module.css';

const SideUser = (props) => (
	<div className={classes.SideUser}>
		<div className={classes.Picture}>
			<img src={props.profilPicture} />
		</div>
		<div className={classes.User}>
			<p>{props.user}</p>
		</div>
        <Link to={`/${props.userId}/newpicture`}><span>Add a picture</span></Link>
	</div>
);

export default SideUser;
