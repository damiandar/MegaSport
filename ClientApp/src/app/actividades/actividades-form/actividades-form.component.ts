import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup} from '@angular/forms';
import { IActividad } from '../../modelos/iactividad';
import { ActividadService } from '../../servicios/actividad.service';
import { Router, ActivatedRoute } from '@angular/router';   

@Component({
  selector: 'app-actividades-form',
  templateUrl: './actividades-form.component.html',
  styleUrls: ['./actividades-form.component.css']
})
export class ActividadesFormComponent implements OnInit {

//variables
modoEdicion: boolean=false;
formActividades: FormGroup;
actividadId:number;

constructor(private fb: FormBuilder,
  private ActividadesService: ActividadService,
  private router: Router,
  private activatedRoute: ActivatedRoute 
) { 
  this.activatedRoute.params.subscribe(
    params => {
      this.actividadId = params['id'];

      if(isNaN(this.actividadId)){
        return;
      }
      else{

        this.modoEdicion=true;
        this.ActividadesService.getActividadesById(this.actividadId)
        .subscribe(actividad=> this.cargarFormulario(actividad),
                   error =>  this.router.navigate(["/actividades"]) 
        );
      } 

    }
  );
}



ngOnInit() {

this.formActividades= this.fb.group({   
  descripcion:'', 
  precio:''
});

}

save(){
let actividad: IActividad =Object.assign({},this.formActividades.value  );

if(this.modoEdicion){

  actividad.id=+this.actividadId;
  this.ActividadesService.actualizaractividad(actividad)
  .subscribe(actividad => this.InsertoOK(),error=> console.error(error) ); 
}
else{
  this.ActividadesService.crearactividad(actividad)
  .subscribe(actividad=> this.InsertoOK(),error=> console.error(error)); 
}

}

InsertoOK(){
console.table("INSERTO OK");
this.router.navigate(["/actividades"]);
}

cargarFormulario(actividad:IActividad){

this.formActividades.patchValue({
    descripcion: actividad.descripcion,
    precio:actividad.precio,
})
}

}
