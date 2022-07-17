function createGrid(side) {
    const container = document.querySelector(".container");

    for (let row = 0; row < side; row++) {
    
        const horiBox = document.createElement('div');
        horiBox.classList.add('hori-box');
    
        for (let column = 0; column < side; column++) {
            const grid = document.createElement("div");
            grid.classList.add('grid');

            // find grid height
            // height of container: 800px
            const gridHeight = 800 / side;
            
            grid.style.height = `${gridHeight}px`;

            horiBox.appendChild(grid);
        }
    
        container.appendChild(horiBox);
    }
}

function setColour(e) {
    const grid = e.target;

    if (e.target.classList.value === "grid") {
        grid.classList.add('coloured');
        generateColour(grid);
    }
}

function generateColour(grid) {
    do {
        const randomColour = Math.floor(Math.random()*16777215).toString(16);
        grid.style.backgroundColor = `#${randomColour}`;
    } while (grid.style.backgroundColor === "")
}


createGrid(16);

const grids = document.querySelectorAll(".grid");
grids.forEach(grid => addEventListener("mouseover", setColour))


