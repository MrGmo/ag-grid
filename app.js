// Specify the columns
const columnDefs = [
  { field: "make", sortable: true, filter: true },
  { field: "model", sortable: true, filter: true },
  { field: "price", sortable: true, filter: true }
];


// let the grid know which columns to use
const gridOptions = {
  columnDefs: columnDefs
};

// lookup the container we want the Grid to use
const eGridDiv = document.querySelector('#myGrid');

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);

// fetch the row data to use and one ready provide it to the Grid via the Grid API
fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
  .then(response => response.json())
  .then(data => {
      gridOptions.api.setRowData(data);
      console.log(data)
  });
