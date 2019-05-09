import { IConnection, InitializeResult, TextDocumentSyncKind, Hover, TextDocument, Position } from 'vscode-languageserver';
import child_process = require('child_process');
import { getIdentifierAt } from './languageUtil';

const serverCapabilities: InitializeResult = {
	capabilities: {
		// Tell the client that the server works in FULL text document sync mode
		textDocumentSync: TextDocumentSyncKind.Full,
		// // support type info on hover
		hoverProvider: true,
		// // support goto definition
		// definitionProvider: true,
		// // support find usage (ie: find all references)
		// referencesProvider: true,
		// // Tell the client that the server support code complete
		// completionProvider: {
		//     // doesn't support completion details
		//     resolveProvider: false
		// }
	}
}



export class HOLService {

	private conn: IConnection;
	private holProcess: child_process.ChildProcess;

	public async initialize(conn: IConnection): Promise<InitializeResult> {
		conn.console.log("HOL server is initializing...");
		this.conn = conn;
		this.startHOL();
		return serverCapabilities;
	}

	private startHOL() {
		const holCmd = "hol";
		this.holProcess = child_process.spawn(holCmd);
	}

	public async hoverInformation(text: TextDocument, pos: Position): Promise<Hover> {
		let wordRange = getIdentifierAt(text, pos);
		return
	}
}