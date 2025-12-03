
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from 'zod';




import SSelectClassificacaoProduto from '@/components/da/Inputs/SSelectClassificacaoProduto';
import SSelectGruposProduto from '@/components/da/Inputs/SSelectGruposProduto ';
import SSelectSubGruposProduto from '@/components/da/Inputs/SSelectSubGruposProduto';
import InputTexto from '@/components/da/Inputs/Texto';
import { Form } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CampoColunaForm } from '@/Dominios/comuns/components/forms/CampoColunaForm';
import { CampoLinhaForm } from '@/Dominios/comuns/components/forms/CampoLinhaForm';
import { TopoForm, type TTopoFormErros } from '@/Dominios/comuns/components/forms/topoForm';
import { useState } from 'react';
import type { crudForm, TcallBackFunction, Tcf } from '../../comuns/types/crudFormEnum';
import { ProdutoPsqAvancado } from '../types/ProdutoEntity';


type FormProps = z.infer<typeof ProdutoPsqAvancado>;
type Tprops = {
    create?: crudForm,
    callBackFunction: TcallBackFunction,
    dataForm?: FormProps | null

}


export function ProdutoPsqForm(props: Tprops) {

    console.log('ProdutoPsqForm', props)

    const [loading] = useState(false)

    let errorGql: TTopoFormErros = { erro: false, msg: '' }



    const _form = useForm<FormProps>({
        resolver: zodResolver(ProdutoPsqAvancado),
        defaultValues: {
            codigo_produto: undefined,
            referencia: undefined,
            situacao: undefined,
            classificacao: undefined,
            _criado_em: undefined,
            _criado_por_id: undefined,
            _excluido_em: undefined,
            produto_marcaId: undefined,
            produto_grupoId: undefined,
            produto_sub_grupoId: undefined,

        }
    });


    const _onCancelar = (v: Tcf) => {
        console.log(v)
    }
    const _onResetar = () => {
        _form.reset()
        _form.setValue('classificacao', undefined)
    }
    const _onSubmit: SubmitHandler<FormProps> = (data: FormProps) => console.log(data)


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
                            acao={'produto'}
                            entidade={'pesquisa avançada de produtos'}
                        />



                        <ScrollArea className="flex flex-col h-[calc(100vh-105px)] pt-6">

                            <CampoColunaForm>

                                <div>
                                    <InputTexto
                                        form={_form}
                                        label="Titulo/Código"
                                        name="codigo_produto"
                                    />
                                </div>

                                <div>
                                    <div className='w-[47%]'>
                                        <SSelectClassificacaoProduto
                                            form={_form}
                                            label="classificacao do produto"
                                            name="classificacao"
                                        />
                                    </div>
                                </div>

                                <CampoLinhaForm>

                                    <div className='w-[47%]'>
                                        <SSelectGruposProduto
                                            form={_form}
                                            label="Grupo do produto"
                                            name="produto_grupoId"
                                        />
                                    </div>
                                    <div className='w-[47%]'>
                                        <SSelectSubGruposProduto
                                            form={_form}
                                            label="Sub Grupo do produto"
                                            name="produto_sub_grupoId"
                                        />

                                    </div>

                                </CampoLinhaForm>


                            </CampoColunaForm>




                        </ScrollArea>


                    </div>
                </Form>
            </form >
        </>
    )
}