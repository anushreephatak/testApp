import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule, MatPaginatorModule, MatInputModule, MatSortModule, MatButtonModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatGridListModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatRadioModule,
  MatNativeDateModule,
  MatToolbarModule} from '@angular/material';
import { DatePipe } from '@angular/common';
import { TableListComponent } from './table-list/table-list.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatGridListModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
