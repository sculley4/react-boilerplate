var React = require('react');
var ReactDOM = require('react-dom');

//Using destructuring, creates Route var from the obj.route returned
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// load our own custom css
require('style!css!sass!applicationStyles');

// start foundation
$(document).foundation();

// most common ReactDOM method
ReactDOM.render(
	<p>React Boilerplate 3</p>,
	document.getElementById('app')
);
