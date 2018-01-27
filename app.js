function makeGrid() {
  //let table = $('<table id="table"></table>');
  let table = $( "#table" );
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

  $("body").append(table);
}

$( "#create" ).click(makeGrid);




$( 'table' ).on( 'click', 'td', function() {
  let color = $( "#color_pick" ).val();
  $( this ).css("background-color",color)
});
