import React, { Component } from 'react';
import ConbineAppContext from './ConbineAppContext';

const context = new ConbineAppContext();

export const AppContext = React.createContext(context);

export class AppContextProvider extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}

	render() {
		const { children } = this.props;

		return (
			<AppContext.Provider value={context}>
				{children}
			</AppContext.Provider>
		);
	}
}

export const AppContextConsumer = AppContext.Consumer;
