

export class GameView {
    private drawingContext: CanvasRenderingContext2D;

    constructor() {
        const canvas = document.getElementById("gameCanvas");
        if (!canvas)
            throw new Error("Can't find the canvas element!");
        const canvasElement = canvas as HTMLCanvasElement;
        const drawingContext = canvasElement.getContext("2d");
        if (!drawingContext)
            throw new Error("Can't get 2D context from canvas!");
        this.drawingContext = drawingContext;
    }

    drawTestRectangle() {
        this.drawingContext.fillStyle = 'red';
        this.drawingContext.fillRect(50, 50, 100, 100);
    }

}