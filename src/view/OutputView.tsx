import { Component, ReactNode } from 'react';
import { AppContext } from '../context';
import NameEvent from '../events/NameEvent';

/**
 * Output view
 * @author	Neil Rackett
 */
export default class OutputView extends Component<any, any> {
	static contextType = AppContext;

	public context!: React.ContextType<typeof AppContext>;

	constructor(props: any) {
		super(props);
		this.state = {};
	}

	public override componentDidMount(): void {
		this.context
			.addEventListener(NameEvent.NAME_LOADED, this.nameChangeHandler)
			.addEventListener(NameEvent.NAME_CHANGE, this.nameChangeHandler)
			;
	}

	public override render(): ReactNode {
		return <h1>Hello, {this.state.name || 'whoever you are'}!</h1>;
	};

	protected nameChangeHandler = (event: any) => {
		this.setState({ name: event.data.name });
	};
}
