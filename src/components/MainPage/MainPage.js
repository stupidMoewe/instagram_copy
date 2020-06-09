import React, { Component } from 'react';

import Elements from './Elements/Elements';
import SideUser from './SideUser/SideUser';
import classes from './MainPage.module.css';

class MainPage extends Component {
	render() {
		return (
			<div className={classes.MainPage}>
				<div className={classes.Elements}>
					<Elements />
				</div>
				<div className={classes.SideUser}>
					<SideUser />
				</div>
			</div>
		);
	}
}

export default MainPage;
