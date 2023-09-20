import { ConbineEvent } from 'conbine';
import { useContext, useState } from 'react';
import { AppContext } from '../context';
import NameEvent from '../events/NameEvent';

/**
 * Input view
 * @author	Neil Rackett
 */
const InputView = (props: any) => {

	const context = useContext(AppContext);

	const [defaultName, setDefaultName] = useState('');
	const [name, setName] = useState('');

	const nameLoadedHandler = (event: ConbineEvent) => {
		setDefaultName(event.data.name);
		setName(event.data.name);
	};

	const inputHandler = (event: any) => {
		const name = event.target.value;
		setName(name);
		context.dispatchEvent(new NameEvent(NameEvent.NAME_CHANGE, { name }));
	};

	const resetHandler = (event: any) => {
		const name = defaultName;
		setName(name);
		context.dispatchEvent(new NameEvent(NameEvent.NAME_CHANGE, { name }));
	};

	const save = (event: any) => {
		context.dispatchEvent(new NameEvent(NameEvent.NAME_SAVE, { name }));
		event.preventDefault();
	};

	context.addEventListener(NameEvent.NAME_LOADED, nameLoadedHandler);

	return (
		<form className="App-intro">
			My name is
			&nbsp;<input type="text" defaultValue={name} onInput={inputHandler} />
			&nbsp;<button type="submit" onClick={save}>Save</button>
			&nbsp;<button type="reset" onClick={resetHandler}>Reset</button>
		</form>
	);

};


export default InputView;