import * as vscode from "vscode";
import { Graph } from "../typings/Types";
import { writeFile } from "fs/promises";

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
        async (spokenFormInfo: SpokenFormInfo) => {
          console.log(
            `spokenFormInfo: ${JSON.stringify(spokenFormInfo, undefined, 2)}`
          );
          await writeFile(
            "/Users/pokey/src/cursorless-vscode/cheatsheet/src/data/cheatsheet/cheatsheet.json",
            JSON.stringify(spokenFormInfo)
          );
        }
      )
    );
  }

  dispose() {
    this.disposables.forEach(({ dispose }) => dispose());
  }
}
