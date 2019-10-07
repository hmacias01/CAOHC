export class Exan {
    constructor(
        public Audiometro: string,
        public Tipo: string,
        public RuidoDba: string,
        public Fecha: string,
        public Cedula: number,
        public Proteccion: string,
        public TipoProteccion: string,
        public OtrosProteccion: string,
        public Molestia: string,
        public MolestiaDetalle: string,
        public IdExamen?: number
    ) {}
}

// IdExamen
// Tipo
// Fecha
// IdEmpleado
// IdProteccion
// IdMolestia
// IdHistoriaCl
// IdEmpresa
// IdAudiometro
