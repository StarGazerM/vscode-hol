// thsi file is is the subprocess of hol
import * as vscode from 'vscode';

let holTaskPromise: Thenable<vscode.Task[]> | undefined = undefined;

export class HolTerminalService {
	holTerminal: vscode.Terminal;

	active: boolean = false;

	constructor() {
		this.startHol();
	}

	public startHol() {
		if (!this.active) {
			this.holTerminal = vscode.window.createTerminal("hol");
			this.holTerminal.sendText("hol");
			// load sml-mode first
			this.holTerminal.sendText("use (Globals.HOLDIR ^ \"/tools/hol-mode.sml\");");
			this.holTerminal.show();
		}
		this.active = true;
	}

	public killHol() {
		if (this.active) {
			this.holTerminal.dispose();
		}
		this.active = false;
	}

	// send selected content in hol
	public runInHol() {
		let selectedText = this.getSelectedText();
		this.holTerminal.sendText(selectedText + ";");
	}

	
	public setGoal() {
		let selectedText = this.getSelectedText();
		// this.holTerminal.sendText(`set_goal(\`\`${selectedText}\`\`);`);
		this.holTerminal.sendText(`proofManagerLib.g \`${selectedText}\` ` + ";");
		this.holTerminal.sendText("proofManagerLib.set_backup 100;");
	}

	public printGoal() {
		let selectedText = this.getSelectedText();
		this.holTerminal.sendText("p();");
	}

	public applyTac() {
		let selectedText = this.getSelectedText();
		this.holTerminal.sendText(`e(${selectedText});`);
	}

	private getSelectedText(): string {
		let text = "";
		let selected: vscode.Selection;
		const activeTextEditor = vscode.window.activeTextEditor;
		if (activeTextEditor) {
			selected = activeTextEditor.selection;

		}
		if (!selected.isEmpty) {
			text = activeTextEditor.document.getText(selected);
		} else {
			vscode.window.showInformationMessage("No code is selected TvT/～");
		}
		return text;
	}
}

let taskProvider: vscode.Disposable | undefined;

export function createHolTaskProvider() {
	taskProvider = vscode.workspace.registerTaskProvider('hol', {
		provideTasks: () => {
			if (!holTaskPromise) {
				holTaskPromise = getHolTask();
			}
			return holTaskPromise;
		},
		resolveTask(_task: vscode.Task): vscode.Task | undefined {
			return undefined;
		}
	});
}

interface HOLTaskDefinition extends vscode.TaskDefinition {
	/**
	 * The task name
	 */
	task: string;
}

async function getHolTask(): Promise<vscode.Task[]> {
	let workspaceRoot = vscode.workspace.rootPath;
	let rootFolder = vscode.workspace.workspaceFolders[0];
	let emptyTasks: vscode.Task[] = [];
	if (!workspaceRoot) {
		return emptyTasks;
	}
	let commandLine = 'hol';

	let kind: HOLTaskDefinition = {
		type: 'hol',
		task: 'run'
	};
	let result: vscode.Task[] = [];
	let task = new vscode.Task(kind, rootFolder, 'run', 'hol', new vscode.ShellExecution(`hol`));
	result.push(task);
	return result;
}