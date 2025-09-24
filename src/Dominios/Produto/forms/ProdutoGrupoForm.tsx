
//import { graphql } from '@/infra/graphql/';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from 'zod';
import { ProdutoGrupoEntity } from '../types/ProdutoGrupoEntity';


import InputTextarea from '@/components/da/Inputs/Textarea';
import InputTexto from '@/components/da/Inputs/Texto';
import { Form } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CampoColunaForm } from '@/Dominios/comuns/components/forms/CampoColunaForm';
import { TopoForm } from '@/Dominios/comuns/components/forms/topoForm';
import type { crudForm, TcallBackFunction, Tcf } from '../../comuns/types/crudFormEnum';


import { gql } from "@apollo/client";
import { useMutation } from '@apollo/client/react';

type FormProps = z.infer<typeof ProdutoGrupoEntity>;
type Tprops = {
    create?: crudForm,
    callBackFunction: TcallBackFunction,
    dataForm?: FormProps | null

}

export type InsProdutoGrupoEntradaDto = {
    descricao: string,
    titulo: string,
}

const CAD_GRUPO_PRODUTOS = gql(` mutation InseriNovoGrupoDeProduto($insProdutoGrupoDto: InsProdutoGrupoEntradaDto!) {
  inseriNovoGrupoDeProduto(insProdutoGrupoDto: $insProdutoGrupoDto) {
    _id
  }
} 
`)



export function ProdutoGrupoForm(props: Tprops) {



    const [cadPro, { data, loading, error }] = useMutation(CAD_GRUPO_PRODUTOS);

    console.log(data, loading, error)



    const { formState: { errors } } = useForm<FormProps>()

    const _form = useForm<FormProps>({
        resolver: zodResolver(ProdutoGrupoEntity),
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












    const _onSubmit: SubmitHandler<InsProdutoGrupoEntradaDto> = async (dataForm: InsProdutoGrupoEntradaDto) => {
        console.log(dataForm)

        cadPro({ variables: { insProdutoGrupoDto: { ...dataForm } } })
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
                                errors: errors
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