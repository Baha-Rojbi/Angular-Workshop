import { Component, Output, EventEmitter } from '@angular/core';
import { Residence } from 'src/core/models/residence';
import { NgForm } from '@angular/forms';
import { Apartment } from 'src/core/models/apartment';
import { ResidenceForm } from 'src/core/models/residenceForm';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {
  newResidence: Residence | null = null;

  addResidence(form: any): void {
    if (form.valid) {
      const { name, address, image } = form.value;
      // Assuming you have a service to add a new residence (residenceService.addResidence)
      // This is just a mock, replace it with actual logic to add a new residence
      this.newResidence = {
        id: this.generateUniqueId(), // You might have your own logic to generate IDs
        name,
        address,
        image,
      };
      console.log('New Residence Added:', this.newResidence);
    }
  }

  generateUniqueId(): number {
    // Logic to generate a unique ID for the new residence
    // Replace this with your own unique ID generation logic
    return Math.floor(Math.random() * 1000) + 1;
  }
}
