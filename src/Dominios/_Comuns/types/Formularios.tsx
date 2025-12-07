
export type TCADFormulario = 'NENHUM' | 'CAD_PRODUTO' | 'CAD_PROD_GRUPO' | 'CAD_PROD_SUB_GRUPO' | 'CAD_PROD_MARCA' | 'CAD_PROD_UNI_MED' | 'CAD_PROD_UNI_MED_SIGLA';


export enum PRODUTO_FORMULARIOS {
    'NENHUM' = 'NENHUM',
    'CAD_PRODUTO' = 'CAD_PRODUTO',
    'CAD_PROD_GRUPO' = 'CAD_PROD_GRUPO',
    'CAD_PROD_SUB_GRUPO' = 'CAD_PROD_SUB_GRUPO',
    'CAD_PROD_MARCA' = 'CAD_PROD_MARCA',
    'CAD_PROD_UNI_MED' = 'CAD_PROD_UNI_MED',
    'CAD_PROD_UNI_MED_SIGLA' = 'CAD_PROD_UNI_MED_SIGLA',
    'PSQ_PRODUTO' = 'PSQ_PRODUTO'
}

export type TZLink = {
    id: string,
    tituloJanela: string;
    titulo: string;
    subTitulo: string;
    aberto: boolean;
    url: string
}

export type IGrupoRota = {
    id: string,
    titulo: string,
    links: TZLink[]
}
export type IRotas = {
    grupos: IGrupoRota[]
}
