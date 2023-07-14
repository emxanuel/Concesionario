using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace api_concesionario.Models;

public partial class ConcesionarioContext : DbContext
{
    public ConcesionarioContext()
    {
    }

    public ConcesionarioContext(DbContextOptions<ConcesionarioContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cliente> Clientes { get; set; }

    public virtual DbSet<Empleado> Empleados { get; set; }

    public virtual DbSet<Factura> Facturas { get; set; }

    public virtual DbSet<Orden> Ordens { get; set; }

    public virtual DbSet<Transaccion> Transaccions { get; set; }

    public virtual DbSet<Vehiculo> Vehiculos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("server=LAPTOP-EMMANUEL\\MANUEL; database=Concesionario; integrated security=yes; trust server certificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseCollation("Modern_Spanish_CI_AS");

        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.HasKey(e => e.IdCliente).HasName("PK__Clientes__D5946642F5B40188");

            entity.Property(e => e.Apellido)
                .HasMaxLength(25)
                .IsUnicode(false);
            entity.Property(e => e.Correo)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Direccion)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Documento)
                .HasMaxLength(15)
                .IsUnicode(false);
            entity.Property(e => e.DocumentoIdentificacion)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("Documento identificacion");
            entity.Property(e => e.FechaNacimiento)
                .HasColumnType("date")
                .HasColumnName("Fecha nacimiento");
            entity.Property(e => e.Nombre)
                .HasMaxLength(25)
                .IsUnicode(false);
            entity.Property(e => e.TarifaAlquiler).HasColumnName("Tarifa alquiler");
            entity.Property(e => e.Telefono)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.TipoCliente)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("Tipo cliente");
            entity.Property(e => e.Trato)
                .HasMaxLength(5)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Empleado>(entity =>
        {
            entity.HasKey(e => e.IdEmpleado).HasName("PK__Empleado__CE6D8B9E71FF6F54");

            entity.Property(e => e.Apellido)
                .HasMaxLength(25)
                .IsUnicode(false);
            entity.Property(e => e.Cedula)
                .HasMaxLength(15)
                .IsUnicode(false);
            entity.Property(e => e.Contrasena)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.FechaContratacion)
                .HasColumnType("date")
                .HasColumnName("Fecha Contratacion");
            entity.Property(e => e.FechaNacimiento)
                .HasColumnType("date")
                .HasColumnName("Fecha Nacimiento");
            entity.Property(e => e.Nombre)
                .HasMaxLength(25)
                .IsUnicode(false);
            entity.Property(e => e.Telefono)
                .HasMaxLength(12)
                .IsUnicode(false);
            entity.Property(e => e.Usuario)
                .HasMaxLength(10)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Factura>(entity =>
        {
            entity.HasKey(e => e.IdFactura).HasName("PK__Factura__50E7BAF148357B1D");

            entity.ToTable("Factura");

            entity.Property(e => e.AutomovilEs)
                .HasColumnType("text")
                .HasColumnName("Automovil/es");
            entity.Property(e => e.Fecha).HasColumnType("date");
            entity.Property(e => e.FechaDevolucion)
                .HasColumnType("date")
                .HasColumnName("Fecha Devolucion");
            entity.Property(e => e.FechaEntrega)
                .HasColumnType("date")
                .HasColumnName("Fecha Entrega");
        });

        modelBuilder.Entity<Orden>(entity =>
        {
            entity.HasKey(e => e.IdOrden).HasName("PK__Orden__C38F300D404C2AF0");

            entity.ToTable("Orden");

            entity.Property(e => e.Facturado)
                .HasMaxLength(2)
                .IsUnicode(false);
            entity.Property(e => e.Fecha).HasColumnType("date");
            entity.Property(e => e.FechaEntrega)
                .HasColumnType("date")
                .HasColumnName("Fecha Entrega");
            entity.Property(e => e.MetodoPago)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("Metodo Pago");
            entity.Property(e => e.Vehiculo)
                .HasMaxLength(45)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Transaccion>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("transaccion");

            entity.Property(e => e.IdAutomovil).HasColumnName("id_automovil");
            entity.Property(e => e.IdCliente).HasColumnName("id_cliente");
            entity.Property(e => e.IdEmpleado).HasColumnName("id_empleado");
            entity.Property(e => e.MetodoTransaccion)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("metodo_transaccion");
            entity.Property(e => e.MontoTransaccion)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("monto_transaccion");
        });

        modelBuilder.Entity<Vehiculo>(entity =>
        {
            entity.HasKey(e => e.IdAutomovil).HasName("PK__Vehiculo__3D90B2E3B6B7A7CD");

            entity.Property(e => e.Año)
                .HasMaxLength(4)
                .IsUnicode(false);
            entity.Property(e => e.Marca)
                .HasMaxLength(45)
                .IsUnicode(false);
            entity.Property(e => e.Modelo)
                .HasMaxLength(45)
                .IsUnicode(false);
            entity.Property(e => e.TipoAuto)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("Tipo auto");
            entity.Property(e => e.TipoCombustible)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("Tipo combustible");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
