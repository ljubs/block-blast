import { Grid } from "../models/grid";
import { GAME_CONFIG } from "../config/gameConfig";


export class GameView {
    private drawingContext: CanvasRenderingContext2D;
    private grid: Grid;

    constructor() {
        const canvas = document.getElementById("gameCanvas");
        if (!canvas)
            throw new Error("Can't find the canvas element!");
        const canvasElement = canvas as HTMLCanvasElement;
        const drawingContext = canvasElement.getContext("2d");
        if (!drawingContext)
            throw new Error("Can't get 2D context from canvas!");
        this.drawingContext = drawingContext;
        canvasElement.width = GAME_CONFIG.CANVAS_WIDTH;
        canvasElement.height = GAME_CONFIG.CANVAS_HEIGHT;
        this.grid = new Grid(GAME_CONFIG.GRID_ROWS, GAME_CONFIG.GRID_COLS);
    }

    drawGrid() {
        const cellWidth = GAME_CONFIG.CANVAS_WIDTH / this.grid.getCols();
        const cellHeight = GAME_CONFIG.CANVAS_HEIGHT / this.grid.getRows();
        this.drawingContext.strokeStyle = 'gray';
        this.drawingContext.lineWidth = 1;

        for (let row = 0; row <= this.grid.getRows(); row++) {
            const y = row * cellHeight;
            this.drawingContext.beginPath();
            this.drawingContext.moveTo(0, y);
            this.drawingContext.lineTo(GAME_CONFIG.CANVAS_HEIGHT, y);
            this.drawingContext.stroke();
        }

        for (let col = 0; col <= this.grid.getCols(); col++) {
            const x = col * cellWidth;
            this.drawingContext.beginPath();
            this.drawingContext.moveTo(x, 0);
            this.drawingContext.lineTo(x, GAME_CONFIG.CANVAS_WIDTH);
            this.drawingContext.stroke();
        }
    }

}