import React from 'react';

import classes from './Comments.module.css';

const Comments = (props) => {
	const displayComments = props.comments.map((com, index) => {
		return (
			<div className={classes.Comment} key={index}>
				<p>
					<b>{com.creatorUsername}</b> {com.comment}
				</p>
			</div>
		);
	});
	return <div className={classes.Comments}>{displayComments}</div>;
};

export default Comments;
