import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/da/shadcn/sheet";
import { Tupla } from "@/components/da/Tupla";
import { Checkbox } from "@/components/ui/checkbox";
import type { Tcf } from "@/Dominios/comuns/types/crudFormEnum";
import { GrupoAcoesProduto } from "@/Dominios/Produto/_dataTable/produto/comuns/GrupoAcoes";
import { BaseForm } from "@/Dominios/Produto/forms/BaseForm";
import { BaseEntity } from "@/Dominios/Produto/types/comuns/BaseEntity";
import { OBTER_PRODUTOS_TODOS } from "@/infra/graphql/query/query_ProdutosFilters";
import { pause } from "@/infra/lib/utils";
import { EVENTO, FORMULARIO } from "@/infra/servicos/zustand/types/eventTypes";
import { zEVFormSheet } from "@/infra/servicos/zustand/zEventosForm";
import { useLazyQuery } from "@apollo/client/react";
import { useEffect, useState } from "react";
import type z from "zod";





type Entity = z.infer<typeof BaseEntity>;


export function TableFormBase() {
    const { setFormSheet, formSheet } = zEVFormSheet()
    const [abreSheetForm, setAbreSheetForm] = useState(false);



    const [expande, setExpande] = useState<string[]>([])
    const _expandir = (item_id: string) => {
        const a = expande.indexOf(item_id)
        if (a != -1) {
            const b = [...expande]
            b.splice(a, 1)
            setExpande(b)
        } else {
            const b = [...expande, item_id]
            setExpande(b)
        }
    }


    const [obtProdutos, { loading, error, data }] = useLazyQuery<{ Produtos: Entity[] }>(OBTER_PRODUTOS_TODOS);

    useEffect(() => {
        obtProdutos()
    }, [])



    // ************* SHEETS ********************

    useEffect(() => {
        if (formSheet.acao == 'NENHUM' && formSheet.form == 'NENHUM' && formSheet.entity == null && formSheet.dados == null) {
            return
        } else {
            FabriqueFormSheet()
            setAbreSheetForm(true)
        }
    }, [formSheet])


    const _callBackAcoes = async (carga: { acao: string, dados: Entity }) => {
        switch (carga.acao) {
            case 'EDITAR':
                setFormSheet(
                    FORMULARIO.PRODUTO,
                    EVENTO.EDITAR,
                    typeof BaseEntity,
                    carga.dados
                )
                FabriqueFormSheet()
                setAbreSheetForm(true)
                break;
            case 'CRIAR':
                setFormSheet(
                    FORMULARIO.PRODUTO,
                    EVENTO.CRIAR,
                    typeof BaseEntity,
                    carga.dados
                )
                FabriqueFormSheet()
                setAbreSheetForm(true)
                break;
            case 'PROD_PSQ_AVANCAO':
                FabriqueFormSheet()
                setAbreSheetForm(true)
                break;

        }

    };
    const _evCallback = async (c: Tcf) => {
        if (c.exe == 'DISMISS') {
            obtProdutos()
            await pause(500)
            setAbreSheetForm(false)
        }
    }

    const FabriqueFormSheet = () => {
        const i = () => {
            switch (formSheet.acao) {
                case EVENTO.CRIAR:
                    return <BaseForm
                        callBackFunction={(c) => _evCallback(c)} />
                    break;
                case EVENTO.EDITAR:
                    return <BaseForm
                        callBackFunction={(c) => _evCallback(c)} />
                    break;
                case EVENTO.FILTRAR:
                    return <BaseForm
                        callBackFunction={(c) => _evCallback(c)} />
                    break;

                default:
                    break;
            }
        }

        return (
            <Sheet open={abreSheetForm} onOpenChange={setAbreSheetForm}>

                <SheetContent>
                    <SheetHeader className='h-0'>
                        <SheetTitle className='h-0'></SheetTitle>
                        <SheetDescription className='h-0'></SheetDescription>
                    </SheetHeader>
                    <div className="h-screen">
                        {i()}
                    </div>
                </SheetContent>
            </Sheet>
        )



    }

    // ************* SHEETS ********************



    return (

        <div className="flex flex-col pb-10">

            <div className="flex w-full items-center p-10">
                <GrupoAcoesProduto />
            </div>

            {loading ?
                <div className="grid grid-rows-1 justify-center items-center w-full h-[360px] text-4xl italic text-slate-500 animate-pulse">Fabricando Lista Produtos...</div>
                :
                <div className="px-10 flex flex-col gap-6 animate-in">
                    {data && data.Produtos.map((a: any) => (
                        <Tupla.Root
                            key={a._id}
                        >
                            <Tupla.MenuEsquerdo expandidoFn={() => _expandir(a._id)} />
                            <Tupla.Corpo>

                                <div

                                    className="L1 flex flex-wrap flex-row justify-start items-center gap-4">

                                    <div className="bg-muted rounded-md p-0 flex">
                                        <div className="text-amber-600 font-black">
                                            <Tupla.Item label='código' texto={' gfhgf6576 '} size="1.4rem" />
                                        </div>

                                        <div className="text-amber-600 font-black">
                                            <Tupla.Item label='produto' texto={'erewrer vfghg'} size="1.4rem" />
                                        </div>

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
                                    <div
                                        key={`${a._id}-A`}
                                        className="bg-amber-50 dark:bg-slate-800 rounded-xl px-4">

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
                            <Tupla.MenuDireito icon={Checkbox}
                                acoes={
                                    [
                                        { titulo: 'editar', descricao: 'editar', acao: 'EDITAR' },
                                        { titulo: 'desativar', descricao: 'desativar', acao: EVENTO.DESTATIVAR },

                                    ]}
                                callBack={(b: string) => _callBackAcoes({ acao: b, dados: a })}

                            />
                        </Tupla.Root>
                    ))}
                </div>
            }





            {/* // *********   SHEET   ************** // */}
            {FabriqueFormSheet()}
            {/* // *********   SHEET   ************** // */}
        </div>

    )


}

