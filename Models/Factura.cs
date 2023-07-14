using System;
using System.Collections.Generic;

namespace api_concesionario.Models;

public partial class Factura
{
    public int IdFactura { get; set; }

    public DateTime? Fecha { get; set; }

    public int? IdCliente { get; set; }

    public string? AutomovilEs { get; set; }

    public DateTime? FechaDevolucion { get; set; }

    public DateTime? FechaEntrega { get; set; }

    public double? Monto { get; set; }
}
