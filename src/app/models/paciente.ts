export class Paciente {
    constructor(
        public Nombre: string,
        public Cedula: string,
        public Edad?: number,
        public Genero?: string,
        public F_Contratacion?: string,
        public Puesto?: string,
        public Turno?: string,
        public NHoras?: number,
        public empresa?: string,
        public img?: string,
        public IdEmpleado?: number
    ) {}
}
