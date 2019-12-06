import { Component, OnInit } from '@angular/core';
import { SortService, ResizeService, PageService, EditService, ExcelExportService, PdfExportService, ContextMenuService, ColumnChooserService } from '@syncfusion/ej2-angular-grids';
import { orderDetails } from '../data';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [SortService, ResizeService, PageService, ExcelExportService, PdfExportService, ContextMenuService, ColumnChooserService]
})
export class GridComponent implements OnInit {
  public data: Object[] = [];
  public config = {
    allowPaging: false,
    allowSorting: true,
    allowGrouping: true,
    allowReordering: true,
    allowResizing: true,
    showColumnChooser: true,
    showColumnMenu: true,
    allowFiltering: true, 
    gridLines: 'Both',
    groupSettings: { showGroupedColumn: true, showUngroupButton: false },
    editSettings: { allowEditing: false, allowAdding: false, allowDeleting: false },
    filterSettings: { type: 'Excel' },
    selectionSettings: {type: "Multiple", mode:"Row" },
    contextMenuItems: ['PdfExport', 'ExcelExport', 'CsvExport'],
    toolbar: ['Search', 'ColumnChooser'],
    // columns: [
    //   { field: 'OrderID', headerText: "Order ID", width: "120", textAlign: 'Right' },
    //   { field: 'CustomerName', headerText: 'Customer Name', width: '150' },
    //   { field: 'OrderDate', headerText: 'Order Date', width: '130', format: "yMd", textAlign: 'Right' },
    //   { field: 'Freight', headerText: 'Freight', width: '120', format: 'C2', textAlign: 'Right' },
    //   { field: 'ShippedDate', headerText: 'Shipped Date', width: '130', format: "yMd", textAlign: 'Right' },
    //   { field: 'ShipCountry', headerText: 'Ship Country', width: '150' },
    // ],
  };

  ngOnInit(): void {
    this.data = orderDetails;
  }
}

