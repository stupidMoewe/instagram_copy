import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Element from './Element/Element';
import classes from './Elements.module.css';

class Elements extends React.Component {
	state = {
		error: null,
		isLoaded: false,
		items: []
	};

	componentDidMount() {
		fetch('http://localhost:5000/api/pictures/').then((res) => res.json()).then(
			(result) => {
				this.setState({
					isLoaded: true,
					items: result.pictures
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		);
	}

	render() {
		const { error, isLoaded, items } = this.state;
		if (error) {
			return <div>Erreur : {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Chargement…</div>;
		} else {
			return (
				<ul>
					{items.map((item) => (
						<div className={classes.Element}>
							<Element
								key={item.id}
								id={item.id}
								creator={item.creator}
								imageURL={item.imageURL}
								likes={item.likes}
								comments={item.comments}
								parutionDate={item.parutionDate}
							/>
						</div>
					))}
				</ul>
			);
		}
	}
}

// const mapToProps =(state)=>{
// 	return{
// 		username: state.userId
// 	}
// }
export default Elements;
