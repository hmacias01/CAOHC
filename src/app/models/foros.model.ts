export class Foro {
    constructor(
        public titulo: string,
        public detalle: string,
        public fecha: string,
        public categoria: string,
        public usuario?: string,
        public _id?: string
    ) {}
}
