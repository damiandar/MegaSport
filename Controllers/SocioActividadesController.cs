using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyMegaSport.Models;

namespace ProyMegaSport.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SocioActividadesController : ControllerBase
    {
        private readonly MegaSportDbContext _context;

        public SocioActividadesController(MegaSportDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<SocioActividad> GetInscripciones(){
           return _context.SocioActividad.ToList();
        }

        // POST: api/SocioActividades
        [HttpPost]
        public void PostSocioActividad(int socioId, int actividadId)
        {

            var socioactividad = new SocioActividad(){  SocioId =socioId, ActividadId=actividadId };
            _context.Entry(socioactividad).State = EntityState.Added;
                //socioactividad.SocioId == 0? EntityState.Added : EntityState.Modified;
            _context.SaveChanges();
            
        } 

        // DELETE: api/SocioActividades/5
        [HttpDelete]
        public void DeleteSocioActividad(int socioId, int actividadId)
        {
            var socioactividad = new SocioActividad(){  SocioId =socioId, ActividadId=actividadId };
            _context.Entry(socioactividad).State = EntityState.Deleted;
                //socioactividad.SocioId == 0? EntityState.Added : EntityState.Modified;
            _context.SaveChanges();
        }

        private bool SocioActividadExists(int id)
        {
            return _context.SocioActividad.Any(e => e.SocioId == id);
        }
    }
}
