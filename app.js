function makePalette() {
  const PALETTE = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "rebeccapurple",
    "pink",
    "white",
    "black",
    "rgb(61, 0, 0)",
    "teal",
  ];
  // putting in color variables

  const paletteElement = $(".palette");

  for (let i = 0; i < PALETTE.length; i++) {
    let button = $("<button>");
    button.css("backgroundColor", PALETTE[i]);
    paletteElement.append(button);
  }

  $(".palette button").first().addClass("active");
}

makePalette();

function makeGrid() {
  const gridElement = $(".grid");

  for (let i = 0; i < 64; i++) {
    let cell = $('<div class="cell"></div>');
    gridElement.append(cell);
  }
}
// for loop going on 64 times
makeGrid();

function onPaletteClick() {
  $(".palette .active").removeClass("active");
  $(this).addClass("active");
}

$(".palette button").click(onPaletteClick);
function onGridClick() {
  let activeColor = $(".palette .active").css("background-color");
  let cellColor = $(this).css("background-color");

  if (cellColor === activeColor) {
    $(this).css("background-color", "");
  } else {
    $(this).css("background-color", activeColor);
  }
}

$(".grid .cell").click(onGridClick);

function onClearClick() {
  $(".grid .cell").css("backgroundColor", "");
}

$(".controls .clear").click(onClearClick);

function onFillAllClick() {
  let activeColor = $(".palette .active").css("backgroundColor");
  $(".cell").css("backgroundColor", activeColor);
}

$(".fill-all").click(onFillAllClick);
//filling in empty cells
function onFillEmptyClick() {
  let activeColor = $(".palette .active").css("backgroundColor");
  let cells = $(".cell");

  for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];

    if ($(cell).css("backgroundColor") == "rgba(0, 0, 0, 0)") {
      $(cell).css("backgroundColor", activeColor);
    }
  }
}

$(".fill-empty").click(onFillEmptyClick);

//$(".creategrid").button(columns, rows);
//let columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//let rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//function mouseenter (){
//mouseisDown = false
//$(cell(mouseisDown)) = false
//if (mouseUp) {
//then (Boolean) = false
//}
//}

//$(creategrid).ready(rows(1,2,3,4,5,6,7,8,9,10))
//$(creategrid).ready(columns(1,2,3,4,5,6,7,8,9,10))
//this is me failing at doing the extra work
//my rows and columns do not work
