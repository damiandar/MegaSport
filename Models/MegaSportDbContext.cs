using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ProyMegaSport.Models
{
    public partial class MegaSportDbContext : DbContext
    {
        public MegaSportDbContext()
        {
        }

        public DbSet <Socio> Socios{get;set;}
        public DbSet <Actividad> Actividades{get;set;}
        public DbSet <SocioActividad> SocioActividad {get;set;}
        public MegaSportDbContext(DbContextOptions<MegaSportDbContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //if (!optionsBuilder.IsConfigured)
            //{
            //    #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            //    optionsBuilder.UseSqlServer("Server=192.168.99.100;Database=MegaSport;user=sa;password=Password_123; ");
            //}
        }

     protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnModelCreatingPartial(modelBuilder);
            
            modelBuilder.Entity<SocioActividad>().HasKey(pv => new { pv.SocioId,pv.ActividadId });

            modelBuilder.Entity<SocioActividad>()
            .HasOne<Socio>(sa =>sa.Socio)
            .WithMany(s => s.SocioActividades)
            .HasForeignKey(pv => pv.SocioId);


            modelBuilder.Entity<SocioActividad>()
            .HasOne<Actividad>(sa => sa.Actividad)
            .WithMany(a => a.SocioActividades)
            .HasForeignKey(sa => sa.ActividadId);
        }


        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
