import z from "zod";


export const ProdutoClassificacaoEntity = z.object({
    value: z.string(),

    label: z.string(),
})