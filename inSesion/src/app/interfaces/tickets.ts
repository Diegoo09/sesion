export interface Tickets {
    id:number;
    estado:string;
    prioridad:string;
    categoria:string;
    asunto:string;
    descripcion:string;
}

export const ListaTickets:Array<Tickets>=[
    {   
        id:1,
        estado:"Abierto",
        prioridad:"Alta",
        categoria:"dos",
        asunto:"Problema",
        descripcion:"Buenas xxdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    {   
        id:2,
        estado:"Cerrado",
        prioridad:"Baja",
        categoria:"dossss",
        asunto:"Incidente",
        descripcion:"ojalas funcione cristo pls"
    },
    {   
        id:3,
        estado:"En Desarrollo",
        prioridad:"Media",
        categoria:"dossss",
        asunto:"Incidente",
        descripcion:"uuououououououo"
    },
    {   
        id:4,
        estado:"En Desarrollo",
        prioridad:"Media",
        categoria:"dossss",
        asunto:"Incidente",
        descripcion:"uuououououououo"
    },
    {   
        id:5,
        estado:"Abierto",
        prioridad:"Media",
        categoria:"dossss",
        asunto:"Incidente",
        descripcion:"uuououououououo"
    },
]