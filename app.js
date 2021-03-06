let row_check;
let cells_check;
const lines_input = $("#height");
const cells_input = $("#width");

//function to determine whether the table has already been created or not
function isInDocument(query) {
  return document.querySelectorAll(query).length != 0;
}

//function to create the table
function makeGrid() {
  if (isInDocument("td") && row_check == $("#height").val() && cells_check == $("#width").val()) {
    //the table has already been created so make all fields white
    $("td").css("background-color", "white");
  } else {
    //table hasn't been created so create the table
    $( "tr" ).remove()

    //basic variables
    let table = $("#table");
    let lines = lines_input.val();
    let cells = cells_input.val();

    row_check = lines;
    cells_check = cells;
    //to prevent losing the values from input fields
    let size = $("#size_pick");
    size.on("submit", function(e) {
      e.preventDefault();
    });
    //loop to build the rows and columns
    for (var i = 0; i < lines; i++) {
      var row = "<tr>";
      for (var y = 0; y < cells; y++) {
        row += "<td></td>";
      }
      row += "</tr>";
      //append the created row to the table
      table.append(row);
    }
  }
}

//calling function to create the table
$("#create").click(makeGrid);

//event listener for changing the color of the clicked table fields
$("table").on("click", "td", function() {
  let color = $("#color_pick").val();
  $(this).css("background-color", color);
});
