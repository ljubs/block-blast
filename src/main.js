"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gameView_1 = require("./views/gameView");
function main() {
    var gameView = new gameView_1.GameView();
    gameView.drawGrid();
}
main();
