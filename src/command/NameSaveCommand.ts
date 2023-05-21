import { Command, Injectable } from 'conbine';
import NameService from '../service/NameService';

/**
 * Save name in response to "nameSave" event, e.g. to a server or database
 * @author	Neil Rackett
 */
@Injectable
export default class NameSaveCommand extends Command {
	/**
	 * Automatically injected by Conbine
	 */
	protected nameService!: NameService;

	public override async execute(): Promise<void> {
		const name = this.event.data.name;
		this.nameService.saveName(name);
	}
}
