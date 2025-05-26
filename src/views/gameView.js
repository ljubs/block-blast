"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
var GameView = /** @class */ (function () {
    function GameView() {
        var canvas = document.getElementById("gameCanvas");
        if (!canvas)
            throw new Error("Can't find the canvas element!");
        var canvasElement = canvas;
        var drawingContext = canvasElement.getContext("2d");
        if (!drawingContext)
            throw new Error("Can't get 2D context from canvas!");
        this.drawingContext = drawingContext;
    }
    GameView.prototype.drawTestRectangle = function () {
        this.drawingContext.fillStyle = 'red';
        this.drawingContext.fillRect(50, 50, 100, 100);
    };
    return GameView;
}());
exports.GameView = GameView;
