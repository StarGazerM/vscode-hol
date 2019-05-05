/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext, commands, Disposable, window } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient';

import { createHolTaskProvider, HolTerminalService } from './hol';

let client: LanguageClient;
let holTerminalService: HolTerminalService;

export function activate(context: ExtensionContext) {
	// The server is implemented in node
	
	createHolTaskProvider();
	holTerminalService = new HolTerminalService();
	context.subscriptions.push(
		commands.registerCommand("hol.start-hol", () => holTerminalService.startHol()),
		commands.registerCommand("hol.kill-hol", () => holTerminalService.killHol()),
		commands.registerCommand("hol.run-in-hol", () => holTerminalService.runInHol())
	);
	// goal
	context.subscriptions.push(
		commands.registerCommand("hol.goal.set", () => holTerminalService.setGoal())
	);
	// tactic
	context.subscriptions.push(
		commands.registerCommand("hol.tactic.e", () => holTerminalService.applyTac())
	);
	let serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);

	// The debug options for the server
	// --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
	let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	let serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};

	// Options to control the language client
	let clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'plaintext' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'HOLextension',
		'HOL extension',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start();
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
