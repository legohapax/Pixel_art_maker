function makeGrid() {
  let table = $("<table></table>");
  let size = $("#size_pick");
  let lines = $("#height").val();
  let cells = $("#width").val();
  size.on("submit", function(e) {
    e.preventDefault();
  });

  for (var i = 0; i < lines; i++) {
    var cell = "<tr>";
    for (var y = 0; y < cells; y++) {
      cell += "<td></td>";
    }
    cell += "</tr>";
    table.append(cell);
  }
  //table.css("color", "red");

  $("body").append(table);
}

$("#create").click(makeGrid);
