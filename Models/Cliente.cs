using System;
using System.Collections.Generic;

namespace api_concesionario.Models;

public partial class Cliente
{
    public int IdCliente { get; set; }

    public string? Nombre { get; set; }

    public string? Apellido { get; set; }

    public string? Trato { get; set; }

    public string? DocumentoIdentificacion { get; set; }

    public string? Documento { get; set; }

    public string? Correo { get; set; }

    public string? Telefono { get; set; }

    public string? Direccion { get; set; }

    public DateTime? FechaNacimiento { get; set; }

    public string? TipoCliente { get; set; }

    public int? TarifaAlquiler { get; set; }
}
