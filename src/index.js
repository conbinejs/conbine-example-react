/**
 * Simple Conbine-React example
 * @author	Neil Rackett
 */

import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { AppContextProvider } from './context';

ReactDOM.render(
	<AppContextProvider>
		<App />
	</AppContextProvider>,
	document.getElementById('root')
);

registerServiceWorker();
