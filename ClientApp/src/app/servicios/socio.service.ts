import { Injectable, Inject } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ISocio } from '../modelos/isocio';
import {IActividad} from '../modelos/iactividad'


@Injectable({
  providedIn: 'root'
})
export class SocioService {

  private apiURL= this.baseUrl + 'api/socios';
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:
  string) {}

  getSocios(): Observable<ISocio[]>{ 
    return this.http.get<ISocio[]> (this.apiURL);
  }

  getSociosById(SocioId:number):Observable<ISocio>{
  return this.http.get<ISocio> (this.apiURL + '/' + SocioId )
  }

  crearSocio(socio: ISocio): Observable<ISocio> {
    return this.http.post<ISocio>(this.apiURL,socio);
  }

  actualizarSocio(socio: ISocio): Observable<ISocio> {
    socio.id = +socio.id;
    return this.http.put<ISocio>(this.apiURL + '/' + socio.id  , socio);
  }
  
  borrarSocio(SocioId:number):Observable<ISocio>{
    return this.http.delete<ISocio> (this.apiURL + '/' + SocioId )
  }
  getInscripcionesSocio(SocioId: number ): Observable<IActividad[]>{ 
    return this.http.get<IActividad[]> (this.apiURL + '/inscripciones/' + SocioId  );
  }


}
