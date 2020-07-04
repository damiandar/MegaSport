import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup} from '@angular/forms';
import { ISocio } from '../../modelos/isocio';
import { SocioService } from '../../servicios/socio.service';
import { Router, ActivatedRoute } from '@angular/router';  
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-socios-form',
  templateUrl: './socios-form.component.html',
  styleUrls: ['./socios-form.component.css'],
  providers: [DatePipe]
})
export class SociosFormComponent implements OnInit {

  //variables
  modoEdicion: boolean=false;
  formSocios: FormGroup;
  socioId:number;

  constructor(private fb: FormBuilder,
    private SocioService: SocioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) { 
    this.activatedRoute.params.subscribe(
      params => {
        this.socioId = params['id'];

        if(isNaN(this.socioId)){
          return;
        }
        else{

          this.modoEdicion=true;
          this.SocioService.getSociosById(this.socioId)
          .subscribe(socio=> this.cargarFormulario(socio),
                     error =>  this.router.navigate(["/socios"]) 
          );

        } 

      }
    );
  }
  


ngOnInit() {

  this.formSocios= this.fb.group({   
    nombre:'',
    fechaNacimiento:'',
  });

}

save(){
  let socio: ISocio =Object.assign({},this.formSocios.value  );
  //debugger;
  //console.dir(socio);
  //console.log("Socio:" , socio);
  //console.log("Socio id:  " + socio.id );
  //console.table(socio);
  
  if(this.modoEdicion){
    socio.id=+this.socioId;
    socio.fechaNacimiento= new Date(socio.fechaNacimiento);  
    this.SocioService.actualizarSocio(socio)
    .subscribe(socio => this.InsertoOK(),error=> console.error(error) ); 
  }
  else{
    socio.fechaNacimiento=new Date(this.datePipe.transform(socio.fechaNacimiento, 'dd-MM-yyyy'));; 
    this.SocioService.crearSocio(socio)
    .subscribe(socio=> this.InsertoOK(),error=> console.error(error)); 
  }

}

InsertoOK(){
  console.table("INSERTO OK");
  this.router.navigate(["/socios"]);
}

cargarFormulario(socio:ISocio){
  this.formSocios.patchValue({
      nombre: socio.nombre,
      fechaNacimiento:this.datePipe.transform(socio.fechaNacimiento, 'dd-MM-yyyy'),
      //fechaNacimiento: new Date( this.datePipe.transform(socio.fechaNacimiento, 'dd-MM-yyyy')),
  })
}


}
