import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { SociosComponent } from './socios/socios.component';
import { ActividadesComponent } from './actividades/actividades.component'; 

import { ActividadesFormComponent } from './actividades/actividades-form/actividades-form.component';
import { SociosFormComponent } from './socios/socios-form/socios-form.component';
import { SocioactividadesFormComponent } from './socios/socioactividades-form/socioactividades-form.component';
import { ActividadsociosFormComponent } from './actividades/actividadsocios-form/actividadsocios-form.component'; 
import { LoginComponent } from './login/login.component';

import { SocioService } from './servicios/socio.service';
import { ActividadService } from './servicios/actividad.service';
import { InterceptorService} from '../app/interceptores/interceptor.service';
import { GuardpaginaService } from './servicios/guardpagina.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent, 
    SociosComponent,
    ActividadesComponent, 
    ActividadesFormComponent,
    SociosFormComponent,
    SocioactividadesFormComponent,
    ActividadsociosFormComponent,
    LoginComponent, 
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }, 


      { path: 'socios', component: SociosComponent,canActivate: [GuardpaginaService] },
      { path: 'actividades', component: ActividadesComponent },

      { path: 'socios-editar/:id', component: SociosFormComponent },
      { path: 'actividades-editar/:id', component: ActividadesFormComponent },

      { path: 'socios-actividades/:id', component: SocioactividadesFormComponent },
      { path: 'actividades-socios/:id', component: ActividadsociosFormComponent },

      { path: 'socios-agregar', component: SociosFormComponent },
      { path: 'actividades-agregar', component: ActividadesFormComponent },

      { path: 'login', component: LoginComponent },

    ])
  ],
  providers: [
    ActividadService,
    SocioService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true } 
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
