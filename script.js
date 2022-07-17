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
            const gridHeight = 400 / side;
            
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
    } while (grid.style.backgroundColor === "");
}

function changeGrid(e) {
    let gridSize;
    do {
        gridSize = prompt("Please enter a grid size (up to 100)", 16);
    } while (gridSize > 100 || gridSize <= 0);

    const container = document.querySelector(".container");
    container.innerHTML = '';
    createGrid(gridSize);
}


// creates basic 16x16 grid
createGrid(16);

// implements hover feature
const grids = document.querySelectorAll(".grid");
grids.forEach(grid => addEventListener("mouseover", setColour))

// button for user to change grid size
const btn = document.querySelector("#change-grid");
btn.addEventListener('click', changeGrid);


