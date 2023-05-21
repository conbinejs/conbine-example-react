import React, { Component } from 'react';
import './App.css';
import { AppContext } from './context';
import logo from './logo.svg';
import InputView from './view/InputView';
import OutputView from './view/OutputView';
import ConbineAppContext from './context/ConbineAppContext';
import NameService from './service/NameService';

export default class App extends Component<any, any> {
	static contextType = AppContext;

	/**
	 * Name service will be injected by Conbine (declared as undefined)
	 * @type NameService
	 */
	protected nameService!: NameService;

	constructor(props: any, context: ConbineAppContext) {
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
