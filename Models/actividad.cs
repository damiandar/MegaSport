using System.Collections.Generic;

namespace ProyMegaSport.Models
{
    public class Actividad
    {
       public int Id {get;set;}
       public string Descripcion {get;set;}
       public double Precio{get;set;}

    public List< SocioActividad> SocioActividades {get;set;}

    }
}