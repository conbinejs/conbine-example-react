import React, { Component } from 'react';
import './App.css';
import { AppContext } from './context';
import logo from './logo.svg';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

export default class App extends Component {
	static contextType = AppContext;

	/**
	 * Name service will be injected by Conbine (declared as undefined)
	 * @type NameService
	 */
	nameService = undefined;

	constructor(props, context) {
		super(props);

		/**
		 * Reference to the application's Conbine context and property injector
		 * @type conbine.Context
		 */
		context.inject(this);

		/**
		 * Use the injected NameService instance to load the data we need
		 */
		this.nameService.loadName();
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Conbine example for React</h1>
				</header>
				<OutputView />
				<InputView />
			</div>
		);
	}
}
