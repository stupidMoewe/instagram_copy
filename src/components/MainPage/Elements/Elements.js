import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'store/actions';
import Element from '../Elements/Element/Element';
import classes from './Elements.module.css';

class Elements extends React.Component {
	componentDidMount() {
		this.props.fetchImages();
	}

	renderPictures() {
		let picturesList = <h2>Is loading</h2>;
		if (this.props.items) {
			picturesList = this.props.items.map((item) => (
				<div className={classes.Element} key={item.id}>
					<Element item={item} />
				</div>
			)).reverse();
		}
		return picturesList;
	}

	render() {
		return <ul>{this.renderPictures()}</ul>;
	}
}

const mapPropsToState = (state) => {
	return {
		items: state.pictures.pictures
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchImages: () => dispatch(actions.fetchImages)
	};
};

export default connect(mapPropsToState, mapDispatchToProps)(Elements);
