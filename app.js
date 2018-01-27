function makeGrid() {
  var table = $("<table></table>");
  var row = $("<tr></tr>");
  var cell = $("<td></td>");
  const lines = $("#width").val();
  const cells = $("#height").val();

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

$("#create").mousedown(makeGrid);
