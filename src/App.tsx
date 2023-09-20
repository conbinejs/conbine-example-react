import { useContext } from 'react';
import './App.css';
import { AppContext } from './context';
import logo from './logo.svg';
import NameService from './service/NameService';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

const App = (props: any) => {

	const context = useContext(AppContext);
	const nameService: NameService = context.inject({}, 'nameService').nameService;

	nameService.loadName();

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

};

export default App;