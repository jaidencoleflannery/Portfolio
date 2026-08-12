// mouse position.
let xPosition = 0;
let yPosition = 0;

// approximate position mappings.
let xCenter = window.innerWidth / 2;
let yCenter = window.innerHeight / 2;

// preallocated memory for efficiency.
let isNearby = false;

const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;

let gridElements = [];
for(let x = 0; x < pageWidth; x++) {
    gridElements[x] = new Array(pageHeight);
    for(let y = 0; y < pageHeight; y++) {
        gridElements[x][y] = (x < (pageWidth / 2))
            ? [xCenter - x * 100]
            : 
    }
}

// Math.
distanceThreshold = 400;

if(document.readyState === `loading`)
    document.addEventListener(`DOMContentLoaded`, onLoad);
else
    onLoad();

function onLoad() {
    // grid for content.
    const grid = document.getElementById(`grid`);
    const gridContext = grid.getContext(`2d`);
    gridContext.fillStyle = `black`;

    initGrid(gridContext);

    // mouse.
    document.addEventListener("mousemove", (event) => {
        // page tracks mouse against entire page, don't use client or screen. 
        xPosition = event.pageX;
        yPosition = event.pageY; 
    });

    // compute at an interval for performance :|
    setInterval(() => {
        resizeCanvas(grid); 
        refreshGrid(gridContext, xPosition, yPosition);
    }, 40);
}

function initGrid (gridContext) {
    gridElements.forEach(([x, y]) => {
        //gridContext.fillRect(x, y, 10, 10);
    });
}

function resizeCanvas(grid) { 
    grid.width = window.innerWidth;
    grid.height = window.innerHeight;
}

function refreshGrid(gridContext, xCursor, yCursor) {
    gridElements.forEach(([x, y]) => {
        isNearby = (true
            /*(Math.abs(Math.abs(x) - Math.abs(xCursor)) < distanceThreshold)
            && (Math.abs(Math.abs(y) - Math.abs(y)) < distanceThreshold)
            */
        );
 
        const xSign = (x > 0) ? 1 : -1;
        const ySign = (y > 0) ? 1 : -1;
        const xDistance = Math.abs(Math.abs(x) - Math.abs(xCursor));
        const yDistance = Math.abs(Math.abs(y) - Math.abs(yCursor));

        if(isNearby) {
            x = xCenter + 0.2 * (xDistance * xSign);
            y = yCenter + 0.2 * (yDistance * ySign);
        }

        /* 
        console.log(`x dist: ${Math.abs(Math.abs(position.x) - Math.abs(x))} y dist: ${Math.abs(Math.abs(position.y) - Math.abs(y))}`);
        console.log(`isNearby: ${isNearby}`);
        console.log(`original x: ${x}`);
        console.log(`mutated x: ${xCenter + (xDistance * xSign)}`);
        console.log(`calc: ${xCenter} + (${xDistance} * ${xSign})\n\n`);  
        */

        gridContext.fillRect(x, y, 10, 10);
    });
}

