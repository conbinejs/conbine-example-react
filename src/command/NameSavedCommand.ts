import { Command } from 'conbine';

/**
 * Open an alert in response to "saved" event
 * @author	Neil Rackett
 */
export default class NameSavedCommand extends Command {
	public override async execute(): Promise<void> {
		let name = this.event.data.name;
		alert(`Thanks ${name}, your name has been saved!`);
	}
}
