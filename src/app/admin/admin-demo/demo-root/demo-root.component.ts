import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-root',
  templateUrl: './demo-root.component.html',
  styleUrls: ['./demo-root.component.css']
})
export class DemoRootComponent implements OnInit {

  nome : string = "pedro";

 inputValor : string = "";

  constructor() { }

  ngOnInit() {
  }

  add(){
       console.log(this.nome);
  }

  pegarInput(input: any){
    this.inputValor= input .value;
  console.log( input.value );
  }

  alteraNome( event: any ){
   this.nome = event.target.value;
  }

}
