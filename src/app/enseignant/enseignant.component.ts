import { Component } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent {
  question: string ="Angular est un framework?";
  reponseCorrecte:string="TS"
  message:string=""
  verifReponse(reponse:string){
    if(this.reponseCorrecte==reponse)
      this.message="Correct"
    else
    this.message="Faux"
  }
}
