import React from 'react';
import { Link } from 'react-router';
import "normalize.css/normalize.css";
import Header from './components/Header'


export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header title='Arty Developer'/>
				{this.props.children}
			</div>
		);
	}
}