import { Component, OnInit } from '@angular/core';
import { IActividad } from '../modelos/iactividad';
import { ActividadService } from '../servicios/actividad.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})

export class ActividadesComponent implements OnInit {

  ListadoActividades: IActividad[];
  constructor(private ActividadService: ActividadService){}
  
  ngOnInit() { 
      this.cargarData();
    } 
  
  cargarData(){
      this.ActividadService.getActividades()
      .subscribe(actividadesDesdeApi => this.ListadoActividades= actividadesDesdeApi,
      error=> console.error(error)); 
    }
    eliminarActividad(activi: IActividad){
      this.ActividadService.borraractividad(activi.id)
      .subscribe(activi => this.cargarData())
      ;
    }

}
