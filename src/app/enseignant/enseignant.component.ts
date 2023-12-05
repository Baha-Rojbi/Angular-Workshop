import { Component } from '@angular/core';
import { LogServiceService } from '../services/log-service.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent {
  constructor(private service:LogServiceService){
  

  }
  question: string ="Angular est un framework?";
  reponseCorrecte:string="TS"
  message:string=""
  verifReponse(reponse:string){
    if(this.reponseCorrecte==reponse)
      this.service.log("Vrai")
    else
    this.service.error("Faux")
  }
}
