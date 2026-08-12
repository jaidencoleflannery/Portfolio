let xPosition = 0;
let yPosition = 0;

if(document.readyState === `loading`)
    document.addEventListener(`DOMContentLoaded`, onLoad);
else
    onLoad();

function onLoad() {
    // grid for content.
    const grid = document.getElementById(`grid`);

    // mouse.
    document.addEventListener("mousemove", (event) => {
        // page tracks mouse against entire page, don't use client or screen. 
        xPosition = event.pageX;
        yPosition = event.pageY; 
    });

    // compute at an interval for performance :|
    setInterval(() => {
        console.log(`\npage: ${xPosition}, ${yPosition}.`);
    }, 100);
}

