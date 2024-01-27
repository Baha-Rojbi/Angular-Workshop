import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../apartment.service';
import { Apartment } from 'src/core/models/apartment';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  list: Apartment[] = []; 

  constructor(private service: ApartmentService) { }

  ngOnInit(): void {
    this.service.getApartmentList().subscribe(
      (data: Apartment[]) => {
        this.list = data;
        console.log(this.list);
      },

    );
  }
  
    
}
