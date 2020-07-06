function getDate() {
  var tableData;
  $.get('https://domain.com/products/1', function(response) {
    tableData =  response;
  });
  return tableData;
}

console.log(getDate());