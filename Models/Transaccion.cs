using System;
using System.Collections.Generic;

namespace api_concesionario.Models;

public partial class Transaccion
{
    public int? IdCliente { get; set; }

    public int? IdEmpleado { get; set; }

    public int? IdAutomovil { get; set; }

    public string? MetodoTransaccion { get; set; }

    public string? MontoTransaccion { get; set; }
}
