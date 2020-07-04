using System;
using System.Collections.Generic;

namespace ProyMegaSport.Models
{
    public class Socio
    {
       public int Id {get;set;}
       public string Nombre {get;set;}

       public DateTime? FechaNacimiento {get;set;}

    public List< SocioActividad> SocioActividades {get;set;}

    }
}