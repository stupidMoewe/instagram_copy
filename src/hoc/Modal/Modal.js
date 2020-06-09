import React from 'react';
import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import BackDrop from 'hoc/BackDrop/BackDrop';
import classes from './Modal.module.css';

const ModalOverlay = (props) => {
	const content = (
		<div className={`${classes.Modal} ${props.className}`} style={props.style}>
			<header className={`${classes.Header} ${props.headerClass}`}>
				<h2>{props.header}</h2>
			</header>
			<form onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}>
				<div className={`${classes.Content} ${props.contentClass}`}>{props.children}</div>
				<footer className={`${classes.Footer} ${props.footerClass}`}>{props.footer}</footer>
			</form>
		</div>
	);
	return ReactDom.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
	return (
		<React.Fragment>
			{props.show && <BackDrop onClick={props.onCancel} />}
			<CSSTransition in={props.show} mountOnEnter unmountOnExit timeOut={200} classNames="modal">
				<ModalOverlay {...props} />
			</CSSTransition>
		</React.Fragment>
	);
};

export default Modal;
