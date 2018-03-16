import { Component, OnInit } from '@angular/core';
import { GrupoService } from './../../admin-services/grupo.service';

@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.css']
})
export class AcompanhamentoComponent implements OnInit {

  grupos = [];

  constructor( private  grupoService : GrupoService ) { }

  ngOnInit() {
    this.grupoService.listar().subscribe( retorno => this.grupos = retorno );
    console.log( this.grupos );
  }

  //listar(){
    //return this.grupoService.listar;
  //}

}
