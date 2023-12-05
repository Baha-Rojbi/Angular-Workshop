import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { DetailApartmentComponent } from './detail-apartment/detail-apartment.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';



@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    FormApartmentComponent,
    NotFoundComponent,
    FormResidenceComponent,
    DetailApartmentComponent,
    ApartmentComponent,
    UserComponent,
    FooterComponent,
    EnseignantComponent,
    EtudiantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
