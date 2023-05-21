import { Actor, Injectable } from 'conbine';
import NameEvent from '../events/NameEvent';

/**
 * Simple model/service that loads and stores a name; in your app, this could
 * be an HttpService, fetch, or local data store for the global application
 * state.
 *
 * @author	Neil Rackett
 */
@Injectable
export default class NameService extends Actor {

	constructor(options: any) {
		super(options);

		if (!localStorage.name) {
			localStorage.name = 'Conbine';
		}
	}

	get name() {
		return localStorage.name;
	}

	loadName() {
		this.context.dispatchEvent(new NameEvent(NameEvent.NAME_LOAD));

		// Simulate an async call, e.g. to a web API
		return Promise.resolve()
			.then(result => {
				let { name } = localStorage;
				this.context.dispatchEvent(new NameEvent(NameEvent.NAME_LOADED, { name }));
				return result;
			})
			;
	}

	saveName(name) {
		localStorage.name = name;

		// Simulate an async call, e.g. to a web API
		return Promise.resolve()
			.then(() => {
				this.context.dispatchEvent(new NameEvent(NameEvent.NAME_SAVED, { name }));
				return this;
			})
			;
	}
}
