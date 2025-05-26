import { Grid } from "../models/grid.js";
export class GameView {
    constructor() {
        const canvas = document.getElementById("gameCanvas");
        if (!canvas)
            throw new Error("Can't find the canvas element!");
        const canvasElement = canvas;
        const drawingContext = canvasElement.getContext("2d");
        if (!drawingContext)
            throw new Error("Can't get 2D context from canvas!");
        this.drawingContext = drawingContext;
        this.grid = new Grid(8, 8);
    }
    drawGrid() {
        const cellWidth = 400 / this.grid.getCols();
        const cellHeight = 400 / this.grid.getRows();
        this.drawingContext.strokeStyle = 'gray';
        this.drawingContext.lineWidth = 1;
        for (let row = 0; row <= this.grid.getRows(); row++) {
            const y = row * cellHeight;
            this.drawingContext.beginPath();
            this.drawingContext.moveTo(0, y);
            this.drawingContext.lineTo(400, y);
            this.drawingContext.stroke();
        }
        for (let col = 0; col <= this.grid.getCols(); col++) {
            const x = col * cellWidth;
            this.drawingContext.beginPath();
            this.drawingContext.moveTo(x, 0);
            this.drawingContext.lineTo(x, 400);
            this.drawingContext.stroke();
        }
    }
}
