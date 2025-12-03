import { Tupla } from "@/components/da/Tupla";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { GrupoAcoesProduto } from "@/Dominios/Produto/dataTable/GrupoAcoes/GrupoAcoesProduto";
import { OBTER_PRODUTOS_TODOS } from "@/infra/graphql/query/query_ProdutosFilters";
import { useLazyQuery } from "@apollo/client/react";
import { useEffect, useState } from "react";
import type z from "zod";
import type { CompraEntity } from "../types/CompraEntity";




type Entity = z.infer<typeof CompraEntity>;

export function TableForm() {


    const [expande, setExpande] = useState<string[]>([])



    const _expandir = (item_id: string) => {
        const a = expande.indexOf(item_id)
        if (a != -1) {
            const b = [...expande]
            b.splice(a, 1)
            setExpande(b)
        } else {
            const b = [...expande, item_id]
            console.log(b)
            setExpande(b)
        }


    }


    const [obtProdutos, { data }] = useLazyQuery<{ Produtos: Entity[] }>(OBTER_PRODUTOS_TODOS);

    useEffect(() => {
        obtProdutos()

        console.log('prosutos', data?.Produtos)
    }, [])


    const _data = [
        { _id: "teste1" },
        { _id: "teste2" },
        { _ida: "teste3" },
        { _id: "teste4" },
        { _id: "teste5" },

    ]


    return (

        <div className="flex flex-col border  rounded-2xl pb-10">

            <div className="flex w-full items-center p-10">
                <GrupoAcoesProduto />
            </div>

            <div className="px-10 flex flex-col gap-6">
                {_data.map((a: any) => (
                    <Tupla.Root
                        key={a._id}
                    >
                        <Tupla.MenuEsquerdo expandidoFn={() => _expandir(a._id)} />
                        <Tupla.Corpo>

                            <div
                                key={a._id}
                                className="L1 flex flex-wrap flex-row justify-start items-center gap-4">

                                <div className="text-amber-600 font-black">
                                    <Tupla.Item label='código' texto={' gfhgf6576 '} size="1.4rem" />
                                </div>

                                <div className="text-amber-600 font-black">
                                    <Tupla.Item label='produto' texto={'erewrer vfghg'} size="1.4rem" />
                                </div>

                                <div>
                                    <Tupla.Item label='referência' texto={'saffasf'} />
                                </div>

                                <Tupla.Item label='código' texto={'EAN fef ere re'} size="1.4rem" />



                                <Tupla.Item label='produto' texto={'EAN  Rrljererpie roewr oehrehr'} size="1.4rem" />



                                <Tupla.Item label='referência' texto={'NCM dsjhfmnbvhrye68'} />


                                <Tupla.Item label='código' texto={'EAN fef ere re'} size="1.4rem" />



                                <Tupla.Item label='produto' texto={'EAN  Rrljererpie roewr oehrehr'} size="1.4rem" />



                                <Tupla.Item label='referência' texto={'NCM dsjhfmnbvhrye68'} />
                                <Tupla.Item label='código' texto={'EAN fef ere re'} size="1.4rem" />



                                <Tupla.Item label='produto' texto={'EAN  Rrljererpie roewr oehrehr'} size="1.4rem" />



                                <Tupla.Item label='referência' texto={'NCM dsjhfmnbvhrye68'} />
                                <Tupla.Item label='código' texto={'EAN fef ere re'} size="1.4rem" />



                                <Tupla.Item label='produto' texto={'EAN  Rrljererpie roewr oehrehr'} size="1.4rem" />



                                <Tupla.Item label='referência' texto={'NCM dsjhfmnbvhrye68'} />
                            </div>
                            {expande.includes(a._id) &&
                                <div>
                                    <Separator />

                                    <div className="L1 flex flex-wrap flex-row justify-start items-center gap-4 pt-4">

                                        <Tupla.Item label='código' texto={'EAN fef ere re'} size="1.4rem" />



                                        <Tupla.Item label='produto' texto={'EAN  Rrljererpie roewr oehrehr'} size="1.4rem" />



                                        <Tupla.Item label='referência' texto={'NCM dsjhfmnbvhrye68'} />


                                        <Tupla.Item label='código' texto={'EAN fef ere re'} size="1.4rem" />



                                        <Tupla.Item label='produto' texto={'EAN  Rrljererpie roewr oehrehr'} size="1.4rem" />



                                        <Tupla.Item label='referência' texto={'NCM dsjhfmnbvhrye68'} />
                                        <Tupla.Item label='código' texto={'EAN fef ere re'} size="1.4rem" />



                                        <Tupla.Item label='produto' texto={'EAN  Rrljererpie roewr oehrehr'} size="1.4rem" />



                                        <Tupla.Item label='referência' texto={'NCM dsjhfmnbvhrye68'} />
                                        <Tupla.Item label='código' texto={'EAN fef ere re'} size="1.4rem" />



                                        <Tupla.Item label='produto' texto={'EAN  Rrljererpie roewr oehrehr'} size="1.4rem" />



                                        <Tupla.Item label='referência' texto={'NCM dsjhfmnbvhrye68'} />

                                    </div>

                                </div>
                            }

                        </Tupla.Corpo>
                        <Tupla.MenuDireito icon={Checkbox} callBack={() => console.log()} />
                    </Tupla.Root>
                ))}
            </div>

        </div>

    )


}