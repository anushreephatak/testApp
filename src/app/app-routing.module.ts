import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'list', component: TableListComponent},
   { path: 'form', component: FormComponent},
  { path: '', redirectTo: 'form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
