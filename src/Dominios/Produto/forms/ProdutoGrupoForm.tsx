
//import { graphql } from '@/infra/graphql/';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from 'zod';
import { ProdutoGrupoArgs } from '../types/ProdutoGrupoEntity';


import InputTextarea from '@/components/da/Inputs/Textarea';
import InputTexto from '@/components/da/Inputs/Texto';
import { Form } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CampoColunaForm } from '@/Dominios/comuns/components/forms/CampoColunaForm';
import { TopoForm, type TTopoFormErros } from '@/Dominios/comuns/components/forms/topoForm';
import type { crudForm, TcallBackFunction, Tcf } from '../../comuns/types/crudFormEnum';



import { CAD_GRUPO_PRODUTOS } from '@/infra/graphql/mutations/DProduto/Produto/mutation_cad_grupo_produto';
import { useMutation } from '@apollo/client/react';

type FormProps = z.infer<typeof ProdutoGrupoArgs>;
type Tprops = {
    create?: crudForm,
    callBackFunction: TcallBackFunction,
    dataForm?: FormProps | null

}

export type InsProdutoGrupoEntradaDto = {
    descricao: string,
    titulo: string,
}





export function ProdutoGrupoForm(props: Tprops) {

    let errorGql: TTopoFormErros = { erro: false, msg: '' }

    const [cadProdutoGrupo, { data, loading, error }] = useMutation(CAD_GRUPO_PRODUTOS, {
        onCompleted(data, clientOptions) {
            if (!error) {
                console.log(data, clientOptions)
                props.callBackFunction({ exe: 'DISMISS', data: [] })
            }
        },
    });

    console.log(data, loading, error)




    const _form = useForm<FormProps>({
        resolver: zodResolver(ProdutoGrupoArgs),
        defaultValues: {
            titulo: '',
            descricao: '',

        }
    });



    const _onCancelar = (v: Tcf) => {
        console.log(v)
    }
    const _onResetar = () => {
        console.log('resetou')
        _form.reset()
    }












    const _onSubmit: SubmitHandler<FormProps> = async (dataForm: FormProps) => {
        console.log(dataForm)

        cadProdutoGrupo({ variables: { insProdutoGrupoDto: { ...dataForm } } })
    }


    return (
        <>
            <form onSubmit={_form.handleSubmit(_onSubmit)}>
                <Form {..._form}>

                    <div className={`flex flex-col ${loading == true ? 'pointer-events-none cursor-not-allowed opacity-70' : 'cursor-auto pointer-events-auto opacity-100'}`}>

                        <TopoForm
                            _submit={() => _form.handleSubmit}
                            _reset={() => _onResetar()}
                            _cancela={(v: Tcf) => _onCancelar(v)}
                            _situacao={{
                                loading: loading,
                                errors: errorGql
                            }}
                            acao={'cadastrando'}
                            entidade={'grupo de produto'}
                        />


                        <ScrollArea className="flex flex-col h-[calc(100vh-105px)] pt-6">

                            <CampoColunaForm>

                                <div>
                                    <InputTexto
                                        form={_form}
                                        label="Titulo/Código"
                                        name="titulo"
                                    />
                                </div>

                                <div>
                                    <InputTextarea
                                        form={_form}
                                        label="Descrição"
                                        name="descricao"
                                    />
                                </div>

                            </CampoColunaForm>




                        </ScrollArea>


                    </div>
                </Form>
            </form >
        </>
    )
}