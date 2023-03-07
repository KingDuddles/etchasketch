const container = document.querySelector('div');
const sketchSize = 400;
let gridSize = 16;
// container.style.alignSelf = "center";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "stretch";
container.style.flex = "1 1 0";
container.style.width = sketchSize + "px";
container.style.height = sketchSize + "px";

function createGrid() {
    for (let i = 0; i <gridSize; i++){
        console.log(i);
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

