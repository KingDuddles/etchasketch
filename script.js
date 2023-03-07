const container = document.querySelector('#container');
const button = document.querySelector('#userGridSize');
const sketchSize = 400;
let gridSize = 16; //set initial grid size
let userInput;
// add code to center the grid
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "stretch";
container.style.flex = "1 1 0";
container.style.width = sketchSize + "px";
container.style.height = sketchSize + "px";
container.style.margin = "auto";

createGrid(gridSize); //create initial grid

button.addEventListener('click',() => {
    userInput = prompt("Please enter your desired grid size up to 100");
    if (userInput >= 1 && userInput <= 100){
        removeGrid();
        gridSize = userInput
        createGrid(gridSize);
    } else {
        alert("Invalid input, please enter a number between 1 and 100");
    }
}) 

function createGrid(gridSize) {
    for (let i = 0; i <gridSize; i++){
        const cols = document.createElement('div');
        cols.style.display = "flex";
        cols.style.flexDirection = "column";
        cols.style.justifyContent = "space-evenly";
        cols.style.alignItems = "stretch";
        cols.style.flex = "1 1 0";
        container.appendChild(cols);
        for (let j = 0; j < gridSize; j++){
            const rows = document.createElement('div');
            rows.style.backgroundColor = "black";
            rows.style.height = (sketchSize/gridSize) + "px";
            rows.style.width = (sketchSize/gridSize) + "px";
            rows.id = (i+1) + "_" + (j+1);
            cols.appendChild(rows);
            rows.addEventListener('mouseover', () => {
                rows.style.backgroundColor = "blue";
            })
        }
    }
}

function removeGrid() {
    // Function to remove existing grid
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}



