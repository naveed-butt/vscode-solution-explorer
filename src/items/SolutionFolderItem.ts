import * as vscode from 'vscode'
import * as path from 'path'
import Item from './Item'

export default class SolutionFolderItem extends Item {
	constructor(name: string) {
		super(name, vscode.TreeItemCollapsibleState.Expanded, null);

		this.children = [];
	}

	public children: Item[];

	iconPath = {
		light: path.join(__filename, '..', '..', '..', 'icons', 'folder.svg'),
		dark: path.join(__filename, '..', '..', '..', 'icons', 'folder.svg')
	};

	public getChildren(): Item[]{
		var result = this.children;
		result.sort((a, b) => {
			var x = a.label.toLowerCase();
			var y = b.label.toLowerCase();
			return x < y ? -1 : x > y ? 1 : 0;
		});

		return result;
	}
}
