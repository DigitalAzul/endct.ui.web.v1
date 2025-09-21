
export type TCADFormulario = 'NENHUM' | 'CAD_PRODUTO' | 'CAD_PROD_GRUPO' | 'CAD_PROD_SUB_GRUPO' | 'CAD_PROD_MARCA' | 'CAD_PROD_UNI_MED' | 'CAD_PROD_UNI_MED_SIGLA';


export type TZLink = {
    id: string,
    form: TCADFormulario;
    tituloJanela: string;
    titulo: string;
    subTitulo: string;
    aberto: boolean;
}

export type IGrupoRota = {
    id: string,
    titulo: string,
    links: TZLink[]
}
export type IRotas = {
    grupos: IGrupoRota[]
}

// export type TZFormulario = {
//     id: string,
//     form: TCADFormulario;
//     tituloJanela: string;
//     titulo: string;
//     subTitulo: string;
//     aberto: boolean;
// }


// export type IRotas = {
//     grupos: {
//         id: string,
//         titulo: string,
//         links: TZFormulario[]
//     }[]
// }
// export type IRotasz = {
//     grupo: {
//         id: string,
//         titulo: string,
//         links: {
//             id: string,
//             form: TCADFormulario;
//             tituloJanela: string;
//             titulo: string;
//             subTitulo: string;
//             aberto: boolean;
//         }[]
//     }[]
// }