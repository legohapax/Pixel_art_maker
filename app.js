function makeGrid() {
  var table = $("<table></table>");
  var lines = $( "#height" ).val();
  var cells = $( "#width" ).val();
  //var lines = 40;
  //var cells = 40;

  //alert(lines + " cells: " + cells);

  for (var i = 0; i < lines; i++) {
    var cell = "<tr>";
    for (var y = 0; y < cells; y++) {
      cell += "<td></td>";
    };
    cell += "</tr>";
    table.append(cell);
  };
  table.css("color", "red");

  $("body").append(table);
  
}



$("#create").click(makeGrid);
 
  


