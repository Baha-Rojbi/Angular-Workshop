import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormsModule } from '@angular/forms';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    FormResidenceComponent,
    FormApartmentComponent,
    NotFoundComponent,


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
