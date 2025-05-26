"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
var grid_js_1 = require("../models/grid.js");
var gameConfig_js_1 = require("../config/gameConfig.js");
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
        canvasElement.width = gameConfig_js_1.GAME_CONFIG.CANVAS_WIDTH;
        canvasElement.height = gameConfig_js_1.GAME_CONFIG.CANVAS_HEIGHT;
        this.grid = new grid_js_1.Grid(gameConfig_js_1.GAME_CONFIG.GRID_ROWS, gameConfig_js_1.GAME_CONFIG.GRID_COLS);
    }
    GameView.prototype.drawGrid = function () {
        var cellWidth = gameConfig_js_1.GAME_CONFIG.CANVAS_WIDTH / this.grid.getCols();
        var cellHeight = gameConfig_js_1.GAME_CONFIG.CANVAS_HEIGHT / this.grid.getRows();
        this.drawingContext.strokeStyle = 'gray';
        this.drawingContext.lineWidth = 1;
        for (var row = 0; row <= this.grid.getRows(); row++) {
            var y = row * cellHeight;
            this.drawingContext.beginPath();
            this.drawingContext.moveTo(0, y);
            this.drawingContext.lineTo(gameConfig_js_1.GAME_CONFIG.CANVAS_HEIGHT, y);
            this.drawingContext.stroke();
        }
        for (var col = 0; col <= this.grid.getCols(); col++) {
            var x = col * cellWidth;
            this.drawingContext.beginPath();
            this.drawingContext.moveTo(x, 0);
            this.drawingContext.lineTo(x, gameConfig_js_1.GAME_CONFIG.CANVAS_WIDTH);
            this.drawingContext.stroke();
        }
    };
    return GameView;
}());
exports.GameView = GameView;
