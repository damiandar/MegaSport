import { Injectable, Inject } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { IActividad } from '../modelos/iactividad';
import { ISocio } from '../modelos/isocio';


@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  private apiURL= this.baseUrl + 'api/actividades';
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:
  string) {}

  getActividades(): Observable<IActividad[]>{ 
    return this.http.get<IActividad[]> (this.apiURL);
  }

  getActividadesSocio(SocioId:number):Observable<IActividad[]>{
    return this.http.get<IActividad[]> (this.apiURL + '/inscripciones/' + SocioId )
  }

  getActividadesById(ActividadId:number):Observable<IActividad>{
  return this.http.get<IActividad> (this.apiURL + '/' + ActividadId )
  }

  crearactividad(actividad: IActividad): Observable<IActividad> {
    actividad.precio=+actividad.precio;  
    return this.http.post<IActividad>(this.apiURL,actividad);
  }

  actualizaractividad(actividad: IActividad): Observable<IActividad> {

    if(isNaN(actividad.id)){
      console.log("NO ES NUMERICO"); 
    }
    actividad.id = +actividad.id;
    actividad.precio=+actividad.precio;
    console.log(actividad.id);
    return this.http.put<IActividad>(this.apiURL + '/' + actividad.id  , actividad);
  }
  
  borraractividad(actividadId:number):Observable<IActividad>{
    return this.http.delete<IActividad> (this.apiURL + '/' + actividadId )
  }
  getInscripcionesPorActividad(actividadId: number ): Observable<ISocio[]>{ 
    return this.http.get<ISocio[]> (this.apiURL + '/anotados/' + actividadId  );
  }

}
