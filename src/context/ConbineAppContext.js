import { Context } from 'conbine';

import NameSaveCommand from '../command/NameSaveCommand';
import NameSavedCommand from '../command/NameSavedCommand';
import NameService from '../service/NameService';
import NameEvent from '../events/NameEvent';

/**
 * This is the application context, which provides you with an event bus and
 * is used to make property injection, commands and singletons available to
 * your components
 *
 * @author	Neil Rackett
 */
export default class ConbineAppContext extends Context {
	constructor() {
		super();

		this.mapSingleton('nameService', NameService, { context: this })

			.mapCommand(NameEvent.NAME_SAVE, NameSaveCommand)
			.mapCommand(NameEvent.NAME_SAVED, NameSavedCommand)
			;
	}
}
