import z from "zod";


export const ProdutoClassificacaoEntity = z.object({
    value: z.string(),

    label: z.string(),
})



export enum ESCALA_TEMRATURA_ENUM {
    "CELSIUS" = "CELSIUS",
    "FAHRENHEIT" = "FAHRENHEIT",
    "KELVIN" = "KELVIN",
    "NAO_APLICADO" = "NAO_APLICADO"
}

export const zESCALA_TEMRATURA_ENUM = z.enum(ESCALA_TEMRATURA_ENUM);


export enum PRODUTO_CLASSIFICACAO_ENUN {
    "CONSUMO" = "CONSUMO",
    "REVENDA" = "REVENDA",
}

export enum SITUACAO_PRODUTO {
    "ATIVO" = "ATIVO",
    "INATIVO" = "INATIVO"
}


