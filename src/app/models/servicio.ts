export class Servicio {
    constructor(
        public asunto: string,
        public detalle: string,
        public fecha: string,
        public usuario: string,
        public img?: string,
        public _id?: string
    ) {}
}
