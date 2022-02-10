// Specify the columns
const columnDefs = [
  { field: "make", sortable: true, filter: true, checkboxSelection: true, rowGroup: true },
  { field: "price", sortable: true, filter: true }
];


const autoGroupColumnDef = {
    headerName: "Model",
    field: "model",
    cellRenderer:'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: true
    }
}


// let the grid know which columns to use
const gridOptions = {
  columnDefs: columnDefs,
  autoGroupColumnDef: autoGroupColumnDef,
  groupSelectsChildren: true,
  rowSelection: 'multiple'
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

const getSelectedRows = () => {
    const selectedNodes = gridOptions.api.getSelectedNodes()
    const selectedData = selectedNodes.map( node => node.data )
    const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}
