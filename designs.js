const grid = document.createElement("tbody");
const table = document.querySelector("#pixelCanvas");
const drawColor = document.querySelector("#colorPicker");
const submitButton = document.querySelector("#submitButton");


//prevent default on submit, TODO: erase previous grid, perhaps in makeGrid()?
submitButton.addEventListener('click', function (e) {
  e.preventDefault();
  table.appendChild(grid);
  makeGrid();
});

function makeGrid() {
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
  if (event.target.nodeName === 'TD') {
      cell.style.backgroundColor = drawColor;
  }
});
