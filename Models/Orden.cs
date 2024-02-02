using System;
using System.Collections.Generic;

namespace ApiConcesionario.Models;

public partial class Orden
{
    public int IdOrden { get; set; }

    public int? NumOrden { get; set; }

    public string? Vehiculo { get; set; }

    public int? IdVehiculo { get; set; }

    public int? IdCliente { get; set; }

    public int? IdEmpleado { get; set; }

    public DateTime? Fecha { get; set; }

    public DateTime? FechaEntrega { get; set; }

    public string? MetodoPago { get; set; }

    public double? Dias { get; set; }

    public string? Facturado { get; set; }
}
