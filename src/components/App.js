import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Router from 'Router';
import UserPage from 'components/UserPage/UserPage';
import Header from 'components/Header/Header';
import MainPage from 'components/MainPage/MainPage';
import AddPicture from 'components/AddPicture/AddPicture';
import * as actions from 'store/actions';
import 'components/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	componentDidMount() {
		this.props.authLogCheck();
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<Switch>
						<Route path="/:userId/newpicture" component={AddPicture} exact />
						<Route path="/:creatorId" component={UserPage} exact />
						<Route path="/" component={MainPage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapDisplayToProps = (dispatch) => {
	return {
		authLogCheck: () =>
			dispatch(actions.authLogCheck())
	};
};

export default connect(null, mapDisplayToProps)(App);
