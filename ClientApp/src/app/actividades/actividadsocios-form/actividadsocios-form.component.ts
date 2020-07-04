import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../servicios/actividad.service';
import { Router, ActivatedRoute } from '@angular/router';   
import { IActividad } from 'src/app/modelos/iactividad';
import { ISocio } from 'src/app/modelos/isocio';

@Component({
  selector: 'app-actividadsocios-form',
  templateUrl: './actividadsocios-form.component.html',
  styleUrls: ['./actividadsocios-form.component.css']
})
export class ActividadsociosFormComponent implements OnInit {
  actividadId:number;
  ListadoSociosInscriptos: ISocio[];

  constructor(  private ActividadesService: ActividadService,
                private activatedRoute: ActivatedRoute,
                private router: Router ) 
                { 
    this.activatedRoute.params.subscribe(
      params => {
        this.actividadId = params['id'];
  
        if(isNaN(this.actividadId)){
          return;
        }
        else{
  
          //this.ActividadesService.getActividadesById(this.actividadId)
          //.subscribe(actividad=> this.cargarFormulario(actividad),
                     error =>  this.router.navigate(["/actividades"]) 
          //);
        } 
  
      }
    );

  }

  ngOnInit() {
    this.cargarInscripciones();
  }

  cargarInscripciones(){
    this.ActividadesService.getInscripcionesPorActividad(this.actividadId)
    .subscribe(act => this.ListadoSociosInscriptos= act,
    error=> console.error(error)); 
  }
 
}
