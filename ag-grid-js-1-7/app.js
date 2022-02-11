let columnDefs = [
    {field: "make"},
    {field: "model"},
    {field: "price"}
]

// let rowData = [
//     {name: "Sara", role: "Manager"},
//     {name: "Mike", role: "HR"},
//     {name: "James", role: "Engineer"}
// ]

let gridOptions = {
    columnDefs: columnDefs,
    rowSelection: 'multiple'
    // rowData: rowData
}

let eGridDiv = document.querySelector('#myGrid')

new agGrid.Grid(eGridDiv, gridOptions)


fetch('https://www.ag-grid.com/example-assets/row-data.json')
  .then(response => response.json())
  .then(data => {
      gridOptions.api.setRowData(data);
      console.log(data)
  });