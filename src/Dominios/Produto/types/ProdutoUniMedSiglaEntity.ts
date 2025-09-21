import z from "zod";


export const ProdutoUniMedSiglaEntity = z.object({


    titulo: z.string(),

    descricao: z.string(),


})
