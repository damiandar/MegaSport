import { Component, OnInit } from '@angular/core';
import { ISocio } from '../modelos/isocio';
import { SocioService } from '../servicios/socio.service';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})

export class SociosComponent implements OnInit {

  ListadoSocios: ISocio[];
  constructor(private SocioService: SocioService){}
  
  ngOnInit() { 
      this.cargarSocios();
    } 
  
  cargarSocios(){
      this.SocioService.getSocios()
      .subscribe(sociosDesdeApi => this.ListadoSocios= sociosDesdeApi,
      error=> console.error(error));  
    }

    eliminarSocio(socio: ISocio){
      this.SocioService.borrarSocio(socio.id)
      .subscribe(socio => this.cargarSocios())
      ;
    }


}
