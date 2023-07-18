export type vehicle = {
    idAutomovil: number,
    marca: string,
    modelo: string,
    tipoAuto: string,
    año: string,
    kilometraje: number,
    capacidad: number,
    tipoCombustible: string,
    tarifa: number,
    cantidad: number
}

export type client = {
    idCliente: number;
    nombre: string;
    apellido: string;
    trato: string;
    documentoIdentificacion: string;
    documento: string;
    correo: string;
    telefono: string;
    direccion: string;
    fechaNacimiento: string;
    tipoCliente: string;
    tarifaAlquiler: number;
}