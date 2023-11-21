import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormsModule } from '@angular/forms';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { DetailApartmentComponent } from './detail-apartment/detail-apartment.component';
import { ApartmentComponent } from './apartment/apartment.component';



@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    FormApartmentComponent,
    NotFoundComponent,
    FormResidenceComponent,
    DetailApartmentComponent,
    ApartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
