import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default (props) => <Router>{props.children}</Router>;
