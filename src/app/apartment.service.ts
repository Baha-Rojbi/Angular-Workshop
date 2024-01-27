import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from 'src/core/models/apartment';


@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private HC: HttpClient) { }
  apartmentUrl ='http://localhost:3000/appartement'
  getApartmentList():Observable<Apartment[]>{
    return this.HC.get<Apartment[]>(this.apartmentUrl);
    }
  
}
