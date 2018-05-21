const table = document.querySelector("#pixelCanvas");
const drawColor = document.querySelector("#colorPicker");
const submitButton = document.querySelector("#submitButton");
const grid = document.createElement("tbody");
table.appendChild(grid);


//prevent default on submit
submitButton.addEventListener('click', function (e) {
  e.preventDefault();
  makeGrid();
});

//creates the grid, and erases the previous grid
function makeGrid() {
  grid.innerHTML = "";
  const gridHeight = document.querySelector("#inputHeight").value;
  const gridWidth = document.querySelector("#inputWidth").value;
    for (let i = 1; i<=gridHeight; i++){
      const row = document.createElement("tr");
      grid.appendChild(row);
      for (let x = 1; x<=gridWidth; x++) {
        const cell = document.createElement("td");
          row.appendChild(cell);
          }
}
}

//TODO functioning draw function
grid.addEventListener('click', function(event){
  let spotToColor = document.querySelector("td")
  spotToColor.style.backgroundColor = drawColor;
});
