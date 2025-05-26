export class Grid {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = this.initializeGrid(rows, cols);
    }
    initializeGrid(rows, cols) {
        const grid = [];
        for (let row = 0; row < rows; row++) {
            grid[row] = [];
            for (let col = 0; col < cols; col++) {
                grid[row][col] = null;
            }
        }
        return grid;
    }
    getRows() {
        return this.rows;
    }
    getCols() {
        return this.cols;
    }
}
