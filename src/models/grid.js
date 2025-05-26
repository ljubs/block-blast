"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var Grid = /** @class */ (function () {
    function Grid(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = this.initializeGrid(rows, cols);
    }
    Grid.prototype.initializeGrid = function (rows, cols) {
        var grid = [];
        for (var row = 0; row < rows; row++) {
            grid[row] = [];
            for (var col = 0; col < cols; col++) {
                grid[row][col] = null;
            }
        }
        return grid;
    };
    Grid.prototype.getRows = function () {
        return this.rows;
    };
    Grid.prototype.getCols = function () {
        return this.cols;
    };
    return Grid;
}());
exports.Grid = Grid;
