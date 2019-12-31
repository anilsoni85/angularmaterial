import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { GridComponent } from './syncfusion/grid/grid.component';

import { AgGridModule } from '@ag-grid-community/angular';

import { GridComponent as AgGridComponent } from './ag-grid/grid/grid.component'


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    DemoRoutingModule,
    GridAllModule,
    AgGridModule.withComponents([])
  ],
  declarations: [ButtonsComponent, FlexboxComponent, ExpansionPanelComponent, GridComponent, AgGridComponent ]
})
export class DemoModule { }
