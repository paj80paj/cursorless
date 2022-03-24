import * as vscode from "vscode";
import { Graph } from "../typings/Types";

type SpokenFormInfo = any;

export default class Cheatsheet {
  private disposables: vscode.Disposable[] = [];

  constructor(graph: Graph) {
    graph.extensionContext.subscriptions.push(this);
  }

  init() {
    this.disposables.push(
      vscode.commands.registerCommand(
        "cursorless.showCheatsheet",
        (spokenFormInfo: SpokenFormInfo) => {
          console.log(
            `spokenFormInfo: ${JSON.stringify(spokenFormInfo, undefined, 2)}`
          );
        }
      )
    );
  }

  dispose() {
    this.disposables.forEach(({ dispose }) => dispose());
  }
}
