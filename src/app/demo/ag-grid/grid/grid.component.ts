import { Component, OnInit } from '@angular/core';
import { orderDetails } from '../../syncfusion/data';
import { AllModules } from "@ag-grid-enterprise/all-modules";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public rowData:any[];
  private columnDefs:any[];
  public modules = AllModules;

  constructor() { }

  ngOnInit() {
    this.rowData = orderDetails;
    this.columnDefs = [
      { headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true, suppressMenu: true, pinned: true },
      { headerName: "Order ID", field: "OrderID", width: 150, pinned: true },
      { headerName: "Customer Name", field: "CustomerName", width: 150, filter: 'text'},
      { headerName: "Freight", field: "Freight", width: 150, filter: 'text',  type: "numericColumn", aggFunc:'sum' },
      { headerName: "Shipped Date", field: "ShippedDate", width: 500, filter: 'text'},
      { headerName: "Ship Country", field: "ShipCountry", width: 500, filter: 'text'}
    ];
  }
}
