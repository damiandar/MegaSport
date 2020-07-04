namespace ProyMegaSport.Models
{
    public class SocioActividad
    {
        public int SocioId { get; set; }
        public Socio Socio{get;set;}
        
        public int ActividadId {get;set;}
        public Actividad Actividad{ get; set; }  
    }
}