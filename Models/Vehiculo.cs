using System;
using System.Collections.Generic;

namespace ApiConcesionario.Models;

public partial class Vehiculo
{
    public int IdAutomovil { get; set; }

    public string? Marca { get; set; }

    public string? Modelo { get; set; }

    public string? TipoAuto { get; set; }

    public string? Año { get; set; }

    public double? Kilometraje { get; set; }

    public int? Capacidad { get; set; }

    public string? TipoCombustible { get; set; }

    public double? Tarifa { get; set; }

    public int? Cantidad { get; set; }
}
