import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { AutenticacionService} from '../servicios/autenticacion.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  LinkLogin: string="Login";
  constructor(private srvAutenticacion: AutenticacionService, private router: Router){
    if(!this.srvAutenticacion.estaLogueado()){
      this.LinkLogin="Logout";
    }
    
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  login(){
    if(this.srvAutenticacion.estaLogueado())
    {
      this.srvAutenticacion.logout();
      this.LinkLogin="Logout";
      alert("SE DESLOGUEO DEL SISTEMA"); 
    }
    else{
      this.LinkLogin="LogIN";
    }
    this.router.navigate(['/login/']);
  }
}
