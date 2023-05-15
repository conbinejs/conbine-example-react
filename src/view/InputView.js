import React, { Component } from 'react';
import { AppContext } from '../context';
import NameEvent from '../events/NameEvent';

/**
 * Input view
 * @author	Neil Rackett
 */
export default class InputView extends Component {
	static contextType = AppContext;

	constructor(props, context) {
		super(props);

		this.state = {};

		context.addEventListener(NameEvent.NAME_LOADED, this.nameLoadedHandler);
	}

	nameLoadedHandler = (event) => {
		this.setState({
			defaultName: event.data.name,
			name: event.data.name
		});
	};

	inputHandler = (event) => {
		let name = event.target.value;
		this.setState({ name });
		this.context.dispatchEvent(new NameEvent(NameEvent.NAME_CHANGE, { name }));
	};

	resetHandler = (event) => {
		const name = this.state.defaultName;
		this.setState({ name });
		this.context.dispatchEvent(new NameEvent(NameEvent.NAME_CHANGE, { name }));
	};

	save = (event) => {
		const { name } = this.state;
		this.context.dispatchEvent(new NameEvent(NameEvent.NAME_SAVE, { name }));
		event.preventDefault();
	};

	render = () => {
		return (
			<form className="App-intro">
				My name is
				&nbsp;<input type="text" defaultValue={this.state.name} onInput={this.inputHandler} />
				&nbsp;<button type="submit" onClick={this.save}>Save</button>
				&nbsp;<button type="reset" onClick={this.resetHandler}>Reset</button>
			</form>
		);
	};
}
