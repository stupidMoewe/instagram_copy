import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Router from 'Router';
import UserPage from 'components/UserPage/UserPage';
import Header from 'components/Header/Header';
import MainPage from 'components/MainPage/MainPage';
import AddPicture from 'components/AddPicture/AddPicture';
import 'App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/:userId/newpicture" component={AddPicture} exact/>
					<Route path="/:creatorId" component={UserPage} exact/>
					<Route path="/" component={MainPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
