import React from 'react';
import classes from './Button.module.css';

export default (props) => {
	return (
		<div >
			<button className={classes.Button}>{props.children}</button>
		</div>
	);
};
