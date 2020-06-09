import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Comments from './Comments';
import classes from './Element.module.css';

const Element = (props) => {
	const [ isLiked, setIsLiked ] = useState(false);
	const [ likes, setLikes ] = useState(props.likes);
	const [ comments, setComments ] = useState(props.comments);
	const [ myComment, setMyComment ] = useState(null);

	useEffect(
		() => {
			const fetchPicture = async () => {
				await fetch(`http://localhost:5000/api/pictures/updatepicture/${props.id}`, {
					headers: { 'Content-Type': 'application/json' },
					method: 'PATCH',
					body: JSON.stringify({
						likes: likes,
						comments: comments
					})
				});
			};
			fetchPicture();
		},
		[ likes, comments ]
	);

	const changeHandler = (event) => {
		setMyComment(event.target.value);
	};
	const clickHandler = () => {
		setComments(comments.concat([ props.username, myComment ]));
		setMyComment(null);
	};

	return (
		<div>
			<div className={classes.Header}>
				<Link to={`/${props.creator}`}>{props.creator}</Link>
			</div>
			<div className={classes.Picture}>
				<img className={classes.Image} src={props.imageURL} />
			</div>
			<div className={classes.Icons}>Icons</div>
			<div
				className={classes.Likes}
				onClick={() => {
					setLikes(isLiked ? likes - 1 : likes + 1);
					setIsLiked(!isLiked);
				}}
			>
				{`${likes} ${likes > 1 ? 'likes' : 'like'}`}
			</div>
			<div className={classes.Comments}> <Comments className={Comments} comments={comments}/></div>
			<div className={classes.ParutionDate}>{props.parutionDate}</div>
			<div className={classes.AddComment}>
				<div className={classes.InputField}>
					<input placeholder="Add a comment" onChange={changeHandler} />
				</div>
				<div className={classes.InputButton}>
					<button onClick={clickHandler} value={myComment}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		username: state.username
	};
};

export default connect(mapStateToProps)(Element);
