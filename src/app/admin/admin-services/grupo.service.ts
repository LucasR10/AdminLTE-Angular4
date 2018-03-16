import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GrupoService {

  private urlService = "http://www.mocky.io/v2/5aaba55d2e00003116138e45";


  constructor( private http: HttpClient ) { }

  
  listar () {
    return this.http.get<any[]>(this.urlService);
      
   }

 

}
