import { useContext, useState } from 'react';
import { AppContext } from '../context';
import NameEvent from '../events/NameEvent';

/**
 * Output view
 * @author	Neil Rackett
 */
const OutputView = (props: any) => {

	const context = useContext(AppContext);
	const [name, setName] = useState('');

	const nameChangeHandler = (event: any) => {
		setName(event.data.name);
	};

	context
		.addEventListener(NameEvent.NAME_LOADED, nameChangeHandler)
		.addEventListener(NameEvent.NAME_CHANGE, nameChangeHandler)
		;

	return <h1>Hello, {name || 'whoever you are'}!</h1>;

};

export default OutputView;