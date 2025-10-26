import z from "zod";


export const ProdutoSituacaoEntity = z.object({
    value: z.string(),

    label: z.string(),
})