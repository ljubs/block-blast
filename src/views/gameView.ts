

class GameView {

    constructor() {
        const canvas = document.getElementById("gameCanvas");
        if (!canvas)
            throw new Error("Can't find the canvas element!");
        const canvasElement = canvas as HTMLCanvasElement;
        const drawingContext = canvasElement.getContext("2d");
    }

}