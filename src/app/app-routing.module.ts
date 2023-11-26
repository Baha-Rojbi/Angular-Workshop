import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence/residence.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailApartmentComponent } from './detail-apartment/detail-apartment.component';
import { Apartment } from 'src/core/models/apartment';
import { ApartmentComponent } from './apartment/apartment.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'home', component: ResidenceComponent}, 
{path: 'addResidence',component:  FormResidenceComponent },
{path: 'addApartment',component:  FormApartmentComponent },
{path: 'user',component:  UserComponent },
{path:'residence/:id',component:ApartmentComponent},
{path:'apartment/:id',component:DetailApartmentComponent},

{path:'',redirectTo:'home',pathMatch:'full'},
{path: '**',component:  NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
