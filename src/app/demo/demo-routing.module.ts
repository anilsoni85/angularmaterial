import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GridComponent } from './syncfusion/grid/grid.component';
import { GridComponent as AgGridComponent } from './ag-grid/grid/grid.component'

const routes: Routes = [
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'flexbox', component: FlexboxComponent },
  { path: 'syncfusion-grid', component: GridComponent },
  { path: 'ag-grid', component: AgGridComponent },
  { path: '**', redirectTo: 'expansion-panel' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
