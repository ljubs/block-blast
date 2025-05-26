export class Grid {

    private grid: (string | null)[][];
    private rows: number;
    private cols: number;

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
        this.grid = this.initializeGrid(rows, cols);
    }

    private initializeGrid(rows: number, cols: number): (string | null)[][] {
        const grid: (string | null)[][] = [];
        for (let row = 0; row < rows; row++) {
            grid[row] = [];
            for (let col = 0; col < cols; col++) {
                grid[row][col] = null;
            }
        }
        return grid;
    }

    public getRows(): number {
        return this.rows;
    }

    public getCols(): number {
        return this.cols;
    }

}