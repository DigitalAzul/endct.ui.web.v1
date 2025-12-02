export enum SUB_DOMINIO {
    "NEBGUM" = "NENHUM",
    "VISAO" = "VISAO",
    "PRODUTO" = "PRODUTO",
    "GRUPO" = "GRUPO",
    "SUBGRUPO" = "SUBGRUPO"
}

export interface IMesaDominio {
    index: number,
    janela: string,
    titulo: string,
    subDominio: SUB_DOMINIO
}