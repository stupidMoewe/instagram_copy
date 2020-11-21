import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import * as actions from 'store/actions';
import classes from './Header.module.css';
// import Modal from 'components/UIElements/Modal/Modal';

class Header extends Component {
	state = {
		modalLoginShow: false,
		modalSigninShow: false,
		isLoggedIn: false,
		email: '',
		password: '',
		username: '',
		usernameSignin: ''
	};

	componentDidMount() {
		if (this.props.auth) {
			this.setState({ isLoggedIn: true });
		}
	}

	userClickedHandler() {
		this.props.auth(this.state.isLoggedIn);
	}

	logoutHandler() {
		this.props.logout();
	}

	buttonLogin() {
		if (this.props.username) {
			return (
				<Button variant="primary" onClick={() => this.logoutHandler()}>
					<div>Logout</div>
				</Button>
			);
		} else {
			return (
				<React.Fragment>
					<Button
						variant="primary"
						onClick={() => this.setState({ modalLoginShow: !this.state.modalLoginShow })}
						style={{ marginLeft: '1rem', marginRight: '1rem' }}
					>
						<div>Login</div>
					</Button>
					<Button
						variant="primary"
						onClick={() => this.setState({ modalSigninShow: !this.state.modalSigninShow })}
						style={{ marginLeft: '1rem', marginRight: '1rem' }}
					>
						<div>Signup</div>
					</Button>
				</React.Fragment>
			);
		}
	}

	render() {
		const emailUpdate = (e) => {
			this.setState({ email: e.target.value });
		};

		const passwordUpdate = (e) => {
			this.setState({ password: e.target.value });
		};

		const usernameSigninUpdate = (e) => {
			this.setState({ usernameSignin: e.target.value });
		};

		const handleSubmitLoginButton = (event) => {
			event.preventDefault();
			const request = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email: this.state.email, password: this.state.password })
			};
			fetch('http://localhost:5000/api/users/login', request).then((response) => response.json()).then((data) => {
				if (data.user) {
					this.props.authSuccess(data.user._id, data.user.username, data.user.profilImage);
				}
				this.setState({ username: data.user.username });
			});
			//userClickedHandler(data)
			this.setState({ modalLoginShow: false });
			this.setState({ modalSigninShow: false });
		};

		const handleSubmitSigninButton = (event) => {
			event.preventDefault();
			const request = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: this.state.usernameSignin,
					email: this.state.email,
					password: this.state.password
				})
			};
			fetch('http://localhost:5000/api/users/signup', request)
				.then((response) => response.json())
				.then((data) => console.log(data));
			// .then((data) => {
			// 	if (data.user) {
			// 		this.props.authSuccess(data.user._id, data.user.username, data.user.profilImage);
			// 	}
			// 	this.setState({ username: data.user.username });
			// });
			//userClickedHandler(data)
			this.setState({ modalLoginShow: false });
			this.setState({ modalSigninShow: false });
		};

		return (
			<div className={classes.Header}>
				<Link to="/" className={classes.Title}>
					Instagram
				</Link>

				<div className={classes.Input}>
					{/* <input placeholder="Search" /> */}
					<InputGroup>
						<FormControl
							placeholder="Research"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
						/>
						<InputGroup.Append>
							<Button variant="outline-secondary">Reseach</Button>
						</InputGroup.Append>
					</InputGroup>
				</div>

				<div className={classes.User}>
					{this.buttonLogin()}
					{/* <Button variant="primary" onClick={() => this.setState({ modalShow: !this.state.modalShow })}>
						<div>{this.props.username ? <div>{this.props.username}</div> : <div>Login</div>}</div>
					</Button> */}
				</div>

				<Modal
					show={this.state.modalLoginShow}
					onHide={() => this.setState({ modalLoginShow: false, email: '', password: '' })}
				>
					<Modal.Header closeButton>
						<Modal.Title>Login</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={this.onSubmit}>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter email"
									value={this.state.email}
									onChange={emailUpdate}
								/>
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
									value={this.state.password}
									onChange={passwordUpdate}
								/>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" type="submit" onClick={handleSubmitLoginButton}>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>

				{/* SignUp Modal */}
				<Modal
					show={this.state.modalSigninShow}
					onHide={() =>
						this.setState({ modalSigninShow: false, email: '', password: '', usernameSignin: '' })}
				>
					<Modal.Header closeButton>
						<Modal.Title>Signin</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={this.onSubmit}>
							<Form.Group controlId="formBasicUsername">
								<Form.Label>Username</Form.Label>
								<Form.Control
									type="usernam"
									placeholder="Username"
									value={this.state.usernameSignin}
									onChange={usernameSigninUpdate}
								/>
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter email"
									value={this.state.email}
									onChange={emailUpdate}
								/>
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
									value={this.state.password}
									onChange={passwordUpdate}
								/>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" type="submit" onClick={handleSubmitSigninButton}>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

const mainStateToProps = (state) => {
	return {
		username: state.auth.username
	};
};

export default connect(mainStateToProps, actions)(Header);
