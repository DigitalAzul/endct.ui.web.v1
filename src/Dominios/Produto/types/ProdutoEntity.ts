
import { z } from 'zod';
import { ProdutoGrupoEntity } from './ProdutoGrupoEntity';
import { ProdutoSubGrupoEntity } from './ProdutoSubGrupoEntity';




export const produtoEschema = z.object({


    grupo: z.object(ProdutoGrupoEntity).optional(),
    subgrupo: z.object(ProdutoSubGrupoEntity).optional(),
    produto_grupoId: z.string().optional(),
    produto_sub_grupoId: z.string().optional(),
    produto_marcaId: z.string(),


    sigla_unidade_primariaId: z.string().optional(),
    fator_conversao_primaria: z.float64().optional(),
    ha_segunda_unidade: z.boolean().optional(),
    sigla_unidade_secundariaId: z.string().optional(),
    fator_conversao_secundaria: z.float64().optional(),

    codigo_produto: z.string(),



    codigo_ncm: z.string(),



    codigo_rms: z.string(),



    licenca_anvisa_num: z.string(),



    data_validade_licenca_anvisa: z.date(),



    descricao: z.string(),



    descricao_tecnica: z.string(),



    observacoes: z.string(),



    imagem: z.string(),



    referencia: z.string(), // perguntar



    peso_bruto: z.any(),



    peso_liquido: z.string(),



    situacao: z.string(), // perguntar



    classificacao: z.string(), // REVENDA | CONSUMO fazer outra tabela



    temp_max_conservacao: z.string(),


    temp_min_conservacao: z.string(),


})



