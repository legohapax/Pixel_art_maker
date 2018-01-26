function makeGrid() {
  var table = $("<table></table>");
  var row = $("<tr></tr>");
  var cell = $("<td></td>");
  var n = $("<td>dd</td>");
  var lines = 10;
  var cells = 10;

  for (var i = 0; i < lines; i++) {
    var cell = "<tr>";
    for (var y = 0; y < cells; y++) {
      cell += "<td></td>";
    }
    //append the row to the table
    cell += "</tr>";
    table.append(cell);
  }
  table.css("color", "red");

  $("body").append(table);
}

$("#create").click(makeGrid);
