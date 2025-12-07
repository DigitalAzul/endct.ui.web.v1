
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from 'zod';


import InputTextarea from '@/components/da/Inputs/Textarea';
import InputTexto from '@/components/da/Inputs/Texto';
import { Form } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CampoColunaForm } from '@/Dominios/_Comuns/components/forms/CampoColunaForm';
import { TopoForm, type TTopoFormErros } from '@/Dominios/_Comuns/components/forms/topoForm';
import { CAD_SIGLA_UNIDADE_PRODUTO } from '@/infra/graphql/mutations/DProduto/Produto/mutation_cad_sigla_unidade';
import { CamposAlterados } from '@/infra/lib/utils';
import { useMutation } from '@apollo/client/react';
import type { crudForm, TcallBackFunction, Tcf } from '../../_Comuns/types/crudFormEnum';
import { ProdutoUniMedSiglaCriar } from '../types/ProdutoUniMedSiglaEntity';


type FormProps = z.infer<typeof ProdutoUniMedSiglaCriar>;
type Tprops = {
    create?: crudForm,
    callBackFunction: TcallBackFunction,
    dataForm?: FormProps | null

}


export function CADProdutoSiglaUnidadeForm(props: Tprops) {

    let errorGql: TTopoFormErros = { erro: false, msg: '' }


    const [ExecMutation, { data, loading, error }] = useMutation(CAD_SIGLA_UNIDADE_PRODUTO, {
        onCompleted(data, clientOptions) {
            if (!error) {
                console.log(data, clientOptions)
                props.callBackFunction({ exe: 'DISMISS', data: [] })
            }
        },
    });

    console.log(data, loading, error)



    const _form = useForm<FormProps>({
        resolver: zodResolver(ProdutoUniMedSiglaCriar),
        defaultValues: {
            sigla: '',
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

    const _camposAlterados = _form.formState.dirtyFields
    const _onSubmit: SubmitHandler<FormProps> = (data: FormProps) => {

        const dto = CamposAlterados(data, _camposAlterados)
        console.log(data)

        ExecMutation({ variables: { inserirSiglaUnidadeMedidaProdutoDto: { ...dto } } })

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
                            entidade={'Sigla de Unidade'}
                            desabilitaAcao={
                                { salvar: Object.keys(_camposAlterados).length > 0 ? false : true }
                            }
                        />


                        <ScrollArea className="flex flex-col h-[calc(100vh-105px)] pt-6">

                            <CampoColunaForm>

                                <div>
                                    <InputTexto
                                        form={_form}
                                        label="Sigla"
                                        name="sigla"
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