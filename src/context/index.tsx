import React from 'react';
import ConbineAppContext from './ConbineAppContext';

const context = new ConbineAppContext();

export const AppContext = React.createContext(context);

export const AppContextProvider = (props: any) => {

	const { children } = props;

	return (
		<AppContext.Provider value={context}>
			{children}
		</AppContext.Provider>
	);

};

export const AppContextConsumer = AppContext.Consumer;
