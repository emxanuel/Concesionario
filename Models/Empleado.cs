using System;
using System.Collections.Generic;

namespace api_concesionario.Models;

public partial class Empleado
{
    public int IdEmpleado { get; set; }

    public string? Nombre { get; set; }

    public string? Apellido { get; set; }

    public string? Cedula { get; set; }

    public double? Sueldo { get; set; }

    public DateTime? FechaNacimiento { get; set; }

    public DateTime? FechaContratacion { get; set; }

    public string? Telefono { get; set; }

    public int? Departamento { get; set; }

    public string? Usuario { get; set; }

    public string? Contrasena { get; set; }
}
