import { Injectable, Inject } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ISocioActividad } from '../modelos/isocio-actividad';

@Injectable({
  providedIn: 'root'
})
export class SocioActividadService {


  private apiURL= this.baseUrl + 'api/socioactividades';
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:
  string) {}

  crearSocioActividad(SocioId:number,ActividadId:number): Observable<{}> {
    return this.http.post(this.apiURL + '?socioId=' + SocioId + '&actividadId=' + ActividadId ,null );
  }

  borrarSocioActividad(SocioId:number,ActividadId:number):Observable<{}>{
    return this.http.delete(this.apiURL + '?socioId=' + SocioId + '&actividadId=' + ActividadId )
  }
  mostrarTodasInscripciones(): Observable<ISocioActividad[]>{
    return this.http.get<ISocioActividad[]>(this.apiURL);
  }

}
