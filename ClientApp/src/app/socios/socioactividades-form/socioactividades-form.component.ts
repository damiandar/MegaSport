import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';  

import { ISocio } from '../../modelos/isocio';
import { IActividad } from '../../modelos/iactividad';

import { SocioService } from '../../servicios/socio.service';
import { ActividadService } from  '../../servicios/actividad.service'
import { SocioActividadService} from '../../servicios/socio-actividad.service'

@Component({
  selector: 'app-socioactividades-form',
  templateUrl: './socioactividades-form.component.html',
  styleUrls: ['./socioactividades-form.component.css']
})
export class SocioactividadesFormComponent implements OnInit {

  
  ListadoActividadesCombo: IActividad[];
  ListadoActividadesInscriptas: IActividad[];
  socioId:number;
  Socio: ISocio;
  ActividadSeleccionada:number;

  constructor(private SocioService: SocioService,
              private ActividadService: ActividadService,
              private SocioActividadService: SocioActividadService,
              private router: Router,
              private activatedRoute: ActivatedRoute){
console.log("Constructor");
    this.activatedRoute.params.subscribe(
      
      params => {
        this.socioId = params['id'];
        this.ActividadSeleccionada=0;
        console.log("SocioId del constructor: " ,this.socioId);
        this.cargarCabecera();

        
        if(isNaN(this.socioId)){
          //this.router.navigate(["/socios"]
        }

      }
    );

  }
  
  ngOnInit() { 
      this.cargarInscripciones();
      this.cargarCombo();
    } 
  
    cargarCabecera(){
      console.log("cargar cabecera",this.socioId);
      this.SocioService.getSociosById(this.socioId)
      .subscribe(sociosDesdeApi => this.Socio= sociosDesdeApi,
      error=> console.error(error)); 
    }
  
    cargarCombo(){
      this.ActividadService.getActividades()
      .subscribe(sociosDesdeApi => this.ListadoActividadesCombo= sociosDesdeApi,
      error=> console.error(error));  
    }    
  
    cargarInscripciones(){
      console.log("CARGAR INSCRIPCIONES");
      this.SocioService.getInscripcionesSocio(this.socioId)
      .subscribe(act => this.ListadoActividadesInscriptas= act,
      error=> console.error(error)); 
    }
 
    cambioActividad(event) {
     this.ActividadSeleccionada= event.target.value;
      //this.selected = value; 
    }

    guardarInscripcion(){
      console.log(this.socioId);
      console.log(this.ActividadSeleccionada);
      this.SocioActividadService.crearSocioActividad(this.socioId,this.ActividadSeleccionada)
      .subscribe();
      this.cargarInscripciones();
    }

    borrarInscripcion(ActividadId:number){
      console.log(this.socioId);
      console.log(this.ActividadSeleccionada);
      this.ActividadSeleccionada=ActividadId;
      this.SocioActividadService.borrarSocioActividad(this.socioId,this.ActividadSeleccionada)
      .subscribe();
      this.cargarInscripciones();
    }


}
