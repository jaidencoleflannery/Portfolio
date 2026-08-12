let pixelRatio = window.devicePixelRatio;

// mouse position.
let xPosition = 0;
let yPosition = 0;

let pageWidth;
let pageHeight;

const cellSize = 14;
const fontSize = 22;

let cellWidth;
let cellHeight;
let numColumns;
let numRows;

let gridElements = [];

// init
if(document.readyState === `loading`)
    document.addEventListener(`DOMContentLoaded`, onLoad);
else
    onLoad();

function onLoad() {
    // grid for content.
    const grid = document.getElementById(`grid`);
    const gridContext = grid.getContext(`2d`);   

    document.addEventListener("mousemove", (event) => {
        // page tracks mouse against entire page, don't use client or screen. 
        xPosition = event.pageX;
        yPosition = event.pageY; 
    });

    // compute at an interval for performance :|
    setInterval(() => {
        resizeCanvas(grid, gridContext);
        refreshGrid(gridContext, xPosition, yPosition);
    }, 120);
}

function resizeCanvas(grid, gridContext) {
    if(pageWidth === window.innerWidth
    && pageHeight === window.innerHeight)
        return;

    pageWidth = window.innerWidth;
    pageHeight = window.innerHeight;
    pixelRatio = window.devicePixelRatio;
    numColumns = Math.ceil(pageWidth / cellSize);
    numRows = Math.ceil(pageHeight / cellSize); 

    grid.style.width = `${pageWidth}px`;
    grid.style.height = `${pageHeight}px`;
    grid.width = pageWidth * pixelRatio;
    grid.height = pageHeight * pixelRatio; 
    gridContext.fillStyle = `darkgray`; 
    gridContext.font = `400 ${fontSize}px Bytesized, monospace`;

    gridContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    gridContext.clearRect(0, 0, grid.width, grid.height);
}

function refreshGrid(gridContext) {
    gridContext.clearRect(0, 0, grid.width, grid.height);
    // init cells.
    for(let row = 0; row < numRows; row++) {
        gridElements[row] = new Array(numColumns);
        for(let column = 0; column < numColumns; column++) {
            const x = column * cellSize;
            const y = row * cellSize;
            gridContext.fillText(getRandomChar(), x, y);
        }
    }
}

function getRandomChar() {
    const minimum = 0;
    const maximum = 128;
    return String.fromCharCode(Math.floor(Math.random() * (maximum - minimum) + minimum));
}
