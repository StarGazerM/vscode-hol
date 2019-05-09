/**
 * here is some language feature for hol
 */

import * as vsrv from 'vscode-languageserver';
import * as uuid from 'node-uuid';

export class Features {
	private static readonly features: vsrv.Registration[] = [
		{
			id: uuid.v4(),
			method: "textDocument/hover"
		},
		{
			id: uuid.v4(),
			method: "textDocument/definition"
		},
		// {
		// 	id: uuid.v4(),
		// 	method: "workspace/executeCommand",
		// 	registerOptions: {
		// 		commands: CommandsService.toFeaturesCommands()
		// 	}
		// }
	];

	private isRegisted = false;

	constructor(private readonly connection: vsrv.IConnection) { }

	public registerAllFeatures() {
		if (this.isRegisted) {
			return;
		}
		let registrationParams: vsrv.RegistrationParams = {
			registrations: Features.features
		};

		this.connection.sendRequest(vsrv.RegistrationRequest.type, registrationParams)
			.then(() => {
				this.isRegisted = true;
			}, error => {
				this.isRegisted = false;
				console.log("error for registration request: " + error);
			});
	}

	/**
     * Disable all features on the client
     */
	public unregisterAllFeatures() {
		if (!this.isRegisted) {
			return;
		}
		let unregistrationParams: vsrv.UnregistrationParams = {
			unregisterations: Features.features
		};
		this.connection.sendRequest(vsrv.UnregistrationRequest.type, unregistrationParams)
			.then(() => {
				this.isRegisted = false;
			}, error => {
				this.isRegisted = true;
				console.log("error for unregistration request: " + error);
			});
	}

}