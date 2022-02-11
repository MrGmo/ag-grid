let columnDefs = [
    {headerName: "Make", field: "make", sortable: true, filter: true, rowGroup: true},
    {headerName: "Model", field: "model", sortable: true, filter: true},
    {headerName: "Price", field: "price", sortable: true, filter: true},
]


// let rowData = [
//     {make: "Toyota", model: "Celica", price: 35000 },
//     {make: "Ford", model: "Mondeo", price: 32000 },
//     {make: "Porsche", model: "Boxter", price: 72000 },
// ]


let autoGroupColumnDef = {
    headerName: "Model",
    field: "model",
    cellRenderer: "agGroupCellRenderer",
    cellRendererParams: {
        checkbox: true
    }
}


let gridOptions = {
    columnDefs: columnDefs,
    autoGroupColumnDef: autoGroupColumnDef,
    rowSelection: "multiple",
    groupSelectsChildren: true
    // rowData: rowData
}


let eGridDiv = document.querySelector("#myGrid")

new agGrid.Grid(eGridDiv, gridOptions)

agGrid.simpleHttpRequest({
    url: "https://www.ag-grid.com/example-assets/small-row-data.json"
})
    .then(function(data){
        gridOptions.api.setRowData(data)
    })



const getSelectedRows = () => {
    let selectedNodes = gridOptions.api.getSelectedNodes()
    let selectedData = selectedNodes.map(node => node.data)
    let selectedDataStringPresentation = selectedData.map(node => node.make + " " + node.model).join(", ")
    alert("Selected Nodes: " + selectedDataStringPresentation)
}