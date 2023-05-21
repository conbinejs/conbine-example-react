import { ConbineEvent } from 'conbine';
import { Component, ReactNode } from 'react';
import { AppContext } from '../context';
import NameEvent from '../events/NameEvent';

/**
 * Input view
 * @author	Neil Rackett
 */
export default class InputView extends Component<any, any> {
	static contextType = AppContext;

	public context!: React.ContextType<typeof AppContext>;

	constructor(props: any) {
		super(props);
		this.state = {};
	}

	public override componentDidMount(): void {
		this.context.addEventListener(NameEvent.NAME_LOADED, this.nameLoadedHandler);
	}

	public override render(): ReactNode {
		return (
			<form className="App-intro">
				My name is
				&nbsp;<input type="text" defaultValue={this.state.name} onInput={this.inputHandler} />
				&nbsp;<button type="submit" onClick={this.save}>Save</button>
				&nbsp;<button type="reset" onClick={this.resetHandler}>Reset</button>
			</form>
		);
	}

	public nameLoadedHandler = (event: ConbineEvent) => {
		this.setState({
			defaultName: event.data.name,
			name: event.data.name
		});
	};

	protected inputHandler = (event: any) => {
		let name = event.target.value;
		this.setState({ name });
		this.context.dispatchEvent(new NameEvent(NameEvent.NAME_CHANGE, { name }));
	};

	protected resetHandler = (event: any) => {
		const name = this.state.defaultName;
		this.setState({ name });
		this.context.dispatchEvent(new NameEvent(NameEvent.NAME_CHANGE, { name }));
	};

	protected save = (event: any) => {
		const { name } = this.state;
		this.context.dispatchEvent(new NameEvent(NameEvent.NAME_SAVE, { name }));
		event.preventDefault();
	};
}
