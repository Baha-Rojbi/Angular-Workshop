import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {
constructor() { }
getStat(list:any[],critere:string,val:any){
  let nbr=0
  for(let i in list){
    if(list[i][critere]===val){
      nbr++
    }
  }
  return nbr;
}

}
