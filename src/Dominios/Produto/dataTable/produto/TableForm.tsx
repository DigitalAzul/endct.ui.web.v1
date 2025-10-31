import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { OBTER_PRODUTOS_TODOS } from "@/infra/graphql/query/query_ProdutosFilters";
import { useLazyQuery } from "@apollo/client/react";
import { ChevronDown, GripVertical } from "lucide-react";
import { useEffect, useState } from "react";
import type z from "zod";
import type { ProdutoEntity } from "../../types/ProdutoEntity";
import { GrupoAcoesProduto } from "./comuns/GrupoAcoes";
import { ProdutoPesquisaSheet } from "./comuns/ProdutoPesquisaSheet";
import { ProdutoTupla } from "./prdutoTupla";

function menuItemHeader(props: { titulo: string | number, label: string }) {

    return (
        <div className="flex flex-col">
            <div className={`text-[16px]  leading-relaxed ${props.titulo == 'ausente' ? 'opacity-30 lowercase line-through' : 'opacity-100 uppercase'}`}>{props.titulo} </div>
            <div className="-translate-y-1 text-[12px] font-light uppercase leading-relaxed">{props.label}</div>

        </div>
    )
}
function menuItem(props: { titulo: string | number, label: string }) {

    return (
        <div className="flex flex-col gap-1">
            <div className="text-[12px] font-light uppercase">{props.label}</div>
            <div className="text-[16px] uppercase leading-3">{props.titulo} </div>

        </div>
    )
}
function menuEsquerdo() {

    return (
        <div className=" w-[40px] rounded-l-[10px] flex flex-row  justify-between ">

            <div className="flex flex-col justify-around items-center translate-x-[6px]">
                <Checkbox />
                <ChevronDown />
            </div>


            <Separator orientation="vertical" />
        </div>
    )
}

function menuDireito() {

    return (
        <div className="w-[40px]  rounded-r-[10px] flex flex-row justify-between">


            <Separator orientation="vertical" />

            <div className="flex flex-col justify-around items-center -translate-x-[6px]">
                <GripVertical />
            </div>
        </div>
    )
}

type produtoEntity = z.infer<typeof ProdutoEntity>;

export function TableForm() {



    const [obtProdutos, { loading, error, data }] = useLazyQuery<{ Produtos: produtoEntity[] }>(OBTER_PRODUTOS_TODOS);

    useEffect(() => {
        obtProdutos()

        console.log('prosutos', data?.Produtos)
    }, [])


    const [qLinhas, setQlinha] = useState(2)

    const _heigth = 120;
    const _class = `flex flex-row justify-between min-h-[${_heigth}px] rounded-[10px] border`

    return (

        <div className="flex flex-col border  rounded-2xl pb-10">

            <div className="flex w-full items-center p-10">
                <GrupoAcoesProduto />
            </div>

            <div className="px-10 flex flex-col gap-6">
                {data?.Produtos.map((a: produtoEntity) => (
                    <ProdutoTupla.Root
                        key={a._id}
                    >
                        <ProdutoTupla.MenuEsquerdo />
                        <ProdutoTupla.Corpo>
                            <div
                                key={a._id}
                                className="L1 flex flex-wrap flex-row justify-start items-center gap-4">

                                <div className="text-amber-600 font-black">
                                    <ProdutoTupla.Item label='código' texto={a.codigo_produto} />
                                </div>

                                <div className="text-amber-600 font-black">
                                    <ProdutoTupla.Item label='produto' texto={a.descricao ? a.descricao : ''} />
                                </div>
                                <div>
                                    <ProdutoTupla.Item label='referência' texto={a.referencia} />
                                </div>
                                <div>
                                    <ProdutoTupla.Item label='código anvisa' texto={a.licenca_anvisa_num} />
                                </div>
                                <div>
                                    <ProdutoTupla.Item label='código ncm' texto={a.codigo_ncm ? a.codigo_ncm : 'ausente'} />
                                </div>
                                <div>
                                    <ProdutoTupla.Item label='classe' texto={a.classificacao ? a.classificacao : 'ausente'} />
                                </div>
                                <div>
                                    <ProdutoTupla.Item label='peso liq.' texto={a.peso_liquido ? a.peso_liquido.toString() : 'ausente'} />
                                </div>
                                <div>
                                    <ProdutoTupla.Item label='peso bruto' texto={a.peso_bruto ? a.peso_bruto.toString() : 'ausente'} />
                                </div>
                                <div>
                                    <ProdutoTupla.Item label='tem. max.' texto={a.temp_max_conservacao ? a.temp_max_conservacao.toString() : 'autente'} />
                                </div>
                                <div>
                                    <ProdutoTupla.Item label='tem. min' texto={a.temp_min_conservacao ? a.temp_min_conservacao.toString() : 'ausente'} />
                                </div>

                                <div>
                                    <ProdutoTupla.Item label='licença anvisa válido até' texto={a.data_validade_licenca_anvisa ? a.data_validade_licenca_anvisa.toString() : 'ausente'} />
                                </div>
                                <div>
                                    <ProdutoTupla.Item label='código rms' texto={a.codigo_ncm ? a.codigo_ncm : 'ausente'} />
                                </div>
                                <div>
                                    <ProdutoTupla.Item label='grupo' texto={a.produto_grupoId ? a.produto_grupoId : 'ausente'} />
                                </div>
                                <div>
                                    <ProdutoTupla.Item label='sub grupo' texto={a.produto_grupoId ? a.produto_grupoId : 'ausente'} />
                                </div>

                            </div>
                        </ProdutoTupla.Corpo>
                        <ProdutoTupla.MenuDireito icon={Checkbox} />
                    </ProdutoTupla.Root>
                ))}
            </div>


            <ProdutoPesquisaSheet abrir={true} />
        </div>

    )


}