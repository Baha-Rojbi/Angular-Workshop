import { Component } from '@angular/core';
import { Residence } from 'src/core/models/residence';
import { Apartment } from 'src/core/models/apartment';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpeg',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpeg',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpeg',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'Manzah 5',
      image: '../../assets/images/R4.jpeg',
    },
  ];
  listApartments: Apartment[] = [
    {
      id: 1,
      appartNum: 1,
      floorNum: 0,
      surface: 100,
      terrace: 'oui',
      surfaceTerrace: 20,
      category: 'S+1',
      description: 'AppartementS+1',
      residence: this.listResidences[0],
    },
    {
      id: 2,
      appartNum: 2,
      floorNum: 0,
      surface: 130,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'AppartementS+2',
      residence: this.listResidences[0],
    },
    {
      id: 3,
      appartNum: 3,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'AppartementS+3',
      residence: this.listResidences[1],
    },
  ];
}
