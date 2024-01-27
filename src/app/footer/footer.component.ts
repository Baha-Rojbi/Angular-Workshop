import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  p1="bonjour"
  compteur = "1"
  p3=""



  methodeA(){
    return 6;
  }
  methodeB(){
    this.compteur="event binding "
  }
  boolean = true;
  //////////////////
  ///////////fils
  @Input() initialValue:string="baha";
  @Output() prefixed=new EventEmitter<string>()


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
