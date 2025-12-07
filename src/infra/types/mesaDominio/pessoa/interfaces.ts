export enum PESSOA_SUB_DOMINIO {
    "NENHUM" = "NENHUM",
    "VISAO" = "VISAO",
    "PESSOAS" = "PESSOAS",
    "ENDERECOS" = "ENDERECOS",
    "CONTATOS" = "CONTATOS"
}

export interface IMesaPessoa {
    index: number,
    janela: string,
    titulo: string,
    subDominio: PESSOA_SUB_DOMINIO
}