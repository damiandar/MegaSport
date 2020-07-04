import { Component, OnInit } from '@angular/core';

import { IActividad } from '../modelos/iactividad';
import { ISocio } from '../modelos/isocio';
import { ISocioActividad } from '../modelos/isocio-actividad';

import { SocioService } from '../servicios/socio.service';
import { ActividadService } from '../servicios/actividad.service';
import { SocioActividadService } from '../servicios/socio-actividad.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{

  ListadoActividades: IActividad[];
  ListadoSocios: ISocio[];
  ListadoInscripciones: ISocioActividad[];
  constructor(private ActividadService: ActividadService, 
              private SocioService: SocioService,
              private SocioActividadService: SocioActividadService){}

  ngOnInit() { 
    this.cargarData();
    console.dir(this.ListadoInscripciones);
  } 

  cargarData(){
    this.ActividadService.getActividades()
    .subscribe(actividadesDesdeApi => this.ListadoActividades= actividadesDesdeApi,
    error=> console.error(error)); 

    this.SocioService.getSocios()
    .subscribe(sociosDesdeApi => this.ListadoSocios= sociosDesdeApi,
    error=> console.error(error)); 

    this.SocioActividadService.mostrarTodasInscripciones()
    .subscribe(sa=>this.ListadoInscripciones=sa,
      error=> console.error(error));
    
      
 
  }



}
