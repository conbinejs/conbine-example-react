import React, { Component } from 'react';
import { AppContext } from '../context';
import NameEvent from '../events/NameEvent';

/**
 * Output view
 * @author	Neil Rackett
 */
export default class OutputView extends Component {
	static contextType = AppContext;

	constructor(props, context) {
		super(props);

		this.state = {};

		context
			.addEventListener(NameEvent.NAME_LOADED, this.nameChangeHandler)
			.addEventListener(NameEvent.NAME_CHANGE, this.nameChangeHandler)
			;
	}

	nameChangeHandler = (event) => {
		this.setState({ name: event.data.name || 'whoever you are' });
	};

	render = () => {
		return <h1>Hello, {this.state.name}!</h1>;
	};
}
