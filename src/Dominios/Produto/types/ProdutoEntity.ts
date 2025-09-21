
import { z } from 'zod';
import { ProdutoGrupoEntity } from './ProdutoGrupoEntity';
import { ProdutoSubGrupoEntity } from './ProdutoSubGrupoEntity';




export const produtoEschema = z.object({


    grupo: z.object(ProdutoGrupoEntity).optional(),
    subgrupo: z.object(ProdutoSubGrupoEntity).optional(),
    produto_grupoId: z.string().optional(),
    produto_sub_grupoId: z.string(),



    codigo_produto: z.string(),



    codigo_ncm: z.string(),



    codigo_rms: z.string(),



    licenca_anvisa_num: z.string(),



    data_validade_licenca_anvisa: z.date(),



    grupo_produto_id: z.string(),



    sub_grupo_produto_id: z.string(),



    marca_produto_id: z.string(),



    descricao: z.string(),



    descricao_tecnica: z.string(),



    observacoes: z.string(),



    imagem: z.string(),



    referencia: z.string(), // perguntar



    peso_bruto: z.any(),



    peso_liquido: z.string(),



    situacao: z.string(), // perguntar



    tipo_produto: z.string(), // REVENDA | CONSUMO fazer outra tabela



    temp_max_conservacao: z.string(),


    temp_min_conservacao: z.string(),


})


export const testeEschema = z.object({

    nome: z.string().min(2),
    cpfcnpj: z.string().min(11, { message: 'CPF inválido' }).max(14, { message: 'CNPJ Inválido' }),
    descricao: z.string().min(1),
    custo: z.float32(),
    importado: z.boolean(),
    uf: z.string(),
    tipo_pessoa: z.string().min(1),
    marca: z.string().min(1)
})
