import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { IconContext } from 'react-icons';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import * as Icons from "@fortawesome/fontawesome-free-solid"

import * as actions from 'store/actions';
import Comments from './Comments';
import classes from './Element.module.css';

class Element extends Component {
	state = {
		creator: {
			creatorName: null,
			creatorId: this.props.item.creator,
			creatorPic: null
		},
		likes: this.props.item.likes,
		isLiked: false,
		comments: this.props.item.comments,
		myComment: ''
	};

	async componentDidMount() {
		const response = await axios.get('http://localhost:5000/api/users/' + this.props.item.creator);
		this.setState({ creatorName: response.data.user.username });
	}

	// problem to solve : componentDidUpdate updates when myComment changes???? => it is really inefficient
	async componentDidUpdate(prevProps) {
		const picId = this.props.item.id;
		if (this.state.likes !== prevProps.likes || this.state.comments !== prevProps.comments) {
			await axios.patch(`http://localhost:5000/api/pictures/updatepicture/${picId}`, {
				likes: this.state.likes,
				comments: this.state.comments
			});
		}
	}

	likeButtonHandler = () => {
		let curLikes = this.state.likes;
		curLikes = this.state.isLiked ? curLikes - 1 : curLikes + 1;
		this.setState({ likes: curLikes });
		this.setState({ isLiked: !this.state.isLiked });
	};
	heartDisplay = () => {
		const isLiked = this.state.isLiked;
		if (isLiked) {
			return (
				<IconContext.Provider value={{ size: '2em', style: { marginTop: '10px', color: 'red' } }}>
					<div>
						<FaHeart />
					</div>
				</IconContext.Provider>
			);
		}
		return (
			<IconContext.Provider value={{ size: '2em', style: { marginTop: '10px' } }}>
				<div>
					<FaRegHeart />
				</div>
			</IconContext.Provider>
		);
	};
	likesDisplay = () => {
		const likes = this.state.likes;
		return <div style={{ margin: '5px' }}>{`${likes} ${likes > 1 ? 'likes' : 'like'}`}</div>;
	};
	displayDate = () => {
		const parutionDate = this.props.item.parutionDate;
		const curDate = Date.now();
		const laps = curDate - parutionDate;
		if (laps < 1000 * 60) {
			return 'less than a minute ago';
		} else if (laps < 1000 * 60 * 60) {
			return 'less than an hour ago';
		} else if (laps < 1000 * 60 * 60 * 24) {
			return 'less than a day ago';
		}
	};
	addCommentHandler = () => {
		const comments = this.state.comments;
		comments.push({ creatorUsername: this.props.username, comment: this.state.myComment });
		this.setState({ comments: comments });
		this.setState({ myComment: '' });
	};

	render() {
		return (
			<div>
				<div className={classes.Header}>
					<Link to={`/${this.state.creator.creatorId}`}>{this.state.creatorName}</Link>
				</div>

				<div className={classes.Picture}>
					<img className={classes.Image} src={this.props.item.imageURL} />
				</div>

				<div className={classes.Icons} />

				<div className={classes.Likes} onClick={this.likeButtonHandler}>
					<div>{this.heartDisplay()}</div>
					<div>{this.likesDisplay()}</div>
				</div>

				<div className={classes.Comments}>
					<Comments className={Comments} comments={this.props.item.comments} />
				</div>

				<div className={classes.ParutionDate}>{this.displayDate()}</div>

				<div className={classes.AddComment}>
					<div className={classes.InputField}>
						<input
							placeholder="Add a comment"
							onChange={(event) => this.setState({ myComment: event.target.value })}
							value={this.state.myComment}
						/>
					</div>
					<div className={classes.InputButton}>
						<button onClick={this.addCommentHandler}>Submit</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.auth.username
	};
};

export default connect(mapStateToProps, actions)(Element);
