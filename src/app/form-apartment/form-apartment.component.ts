import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/core/models/apartment';

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent implements OnInit{
  apartmentForm=new FormGroup({
    apartmentNumber: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/)]),
    floorNumber: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/)]),
    surface: new FormControl('',[Validators.required]),
    terrace: new FormControl(''),
    surfaceTerrace: new FormControl({ value: '', disabled: true }, Validators.required),
    category: new FormControl([Validators.required]),
    description: new FormControl('',[Validators.required, Validators.minLength(10)]),
    residence: new FormControl('',[Validators.required]),
  }); 
    //Activer ou désactiver la Surface Terrace en fonction de la valeur de Terrace
   onTerraceChange() {
    const terraceControl = this.apartmentForm.get('terrace');
    const terraceSurfaceControl = this.apartmentForm.get('terraceSurface');

    if (terraceControl?.value === 'yes') {
     terraceSurfaceControl?.enable();
    } else {
      terraceSurfaceControl?.disable();
    }
  }
  newResidence: Apartment | null = null;
  addApartment(fom:any):void{
      // Assuming you have a service to add
      console.log('New Apartment Added:' ,this.apartmentForm.value);
    }
    residence : String| null = null;
    constructor(private route:ActivatedRoute){}
    ngOnInit(): void {
        this.route.paramMap.subscribe(params=>{
          this.residence=params.get('id')
        })
    }
  }
  


   
  
