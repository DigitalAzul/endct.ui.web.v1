
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from 'zod';

import InputNumero from '@/components/da/Inputs/Numero';
import InputTexto from '@/components/da/Inputs/Texto';
import { Form } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { crudForm, TcallBackFunction } from '../../_Comuns/types/crudFormEnum';

import SSelectSigla from '@/components/da/Inputs/SSelectSiglaProduto';
import {
    Item,
    ItemContent,
    ItemSeparator,
    ItemTitle
} from "@/components/ui/item";
import { CampoColunaForm } from '@/Dominios/_Comuns/components/forms/CampoColunaForm';
import { CampoLinhaForm } from '@/Dominios/_Comuns/components/forms/CampoLinhaForm';
import { TopoForm, type TTopoFormErros } from '@/Dominios/_Comuns/components/forms/topoForm';
import { CAD_PRODUTOS } from '@/infra/graphql/mutations/DProduto/Produto/mutation_cad_produto';
import { useMutation } from '@apollo/client/react';
import { PessoaEntity } from '../Types/PessoaEntity';





type baseFormProps = z.infer<typeof PessoaEntity>;
type Tprops = {
    create?: crudForm,
    callBackFunction: TcallBackFunction,
    dataForm?: baseFormProps | null

}


export function CADPessoaForm(props: Tprops) {



    let errorGql: TTopoFormErros = { erro: false, msg: '' }


    const _form = useForm<baseFormProps>({
        resolver: zodResolver(PessoaEntity),
        defaultValues: {


        }
    });


    const _onCancelar = () => {
        props.callBackFunction({ exe: 'DISMISS', data: [] })
    }
    const _onResetar = () => {
        console.log('resetou')
        _form.reset()
    }

    const [cadPro, { data, loading, error }] = useMutation(CAD_PRODUTOS, {
        onCompleted(data, clientOptions) {
            if (!error) {
                console.log('(data, clientOptions', data, clientOptions)
                props.callBackFunction({ exe: 'DISMISS', data: [] })
            }
            if (error) {
                errorGql = { erro: true, msg: error.message }
            }
        },
    });
    console.log(data)


    const _onSubmit: SubmitHandler<baseFormProps> = (dataForm: baseFormProps) => {

        cadPro({ variables: { insProdutoEntraDto: { ...dataForm } } })


    }


    return (
        <>
            <form onSubmit={_form.handleSubmit(_onSubmit)}>
                <Form {..._form}>

                    <div className={`flex flex-col ${loading == true ? 'pointer-events-none cursor-not-allowed opacity-70' : 'cursor-auto pointer-events-auto opacity-100'}`}>

                        <TopoForm
                            _submit={() => _form.handleSubmit}
                            _reset={() => _onResetar()}
                            _cancela={() => _onCancelar()}
                            _situacao={{
                                loading: loading,
                                errors: errorGql
                            }}
                            acao={'Cadastrando'}
                            entidade={'Pessoa F/J'}
                        />


                        <ScrollArea className="flex flex-col h-[calc(100vh-105px)] pt-6">

                            <div className='p-4'>
                                <Item variant="outline">
                                    <ItemContent>
                                        <ItemTitle className='text-2xl uppercase font-black'>identificação</ItemTitle>

                                        <ItemSeparator className='mt-2 mb-3' />
                                        <CampoLinhaForm>

                                            <div className='w-[47%]'>
                                                <InputTexto
                                                    form={_form}
                                                    label="pessoa_juridica"
                                                    name="pessoa_juridica"
                                                    requerido
                                                />
                                            </div>
                                            <div className='w-[47%]'>
                                                <InputTexto
                                                    form={_form}
                                                    label="MAtriz / Filial"
                                                    name="filial"
                                                    requerido
                                                />
                                            </div>

                                            <div className='w-[47%]'>
                                                <InputTexto
                                                    form={_form}
                                                    label="razao_social"
                                                    name="razao_social"
                                                />
                                            </div>
                                            <div className='w-[47%]'>
                                                <InputTexto
                                                    form={_form}
                                                    label="nome fantasia"
                                                    name="nome_fantasia"
                                                />
                                            </div>
                                            <div className='w-[47%]'>
                                                <InputTexto
                                                    form={_form}
                                                    label="cnpj_cpf"
                                                    name="cnpj_cpf"
                                                />
                                            </div>

                                        </CampoLinhaForm>



                                        <CampoColunaForm>


                                            <div>
                                                <InputTexto
                                                    form={_form}
                                                    label="inscricao_estadual"
                                                    name="inscricao_estadual"
                                                />
                                            </div>
                                            <div>
                                                <InputTexto
                                                    form={_form}
                                                    label="cnae"
                                                    name="cnae"
                                                />
                                            </div>







                                        </CampoColunaForm>
                                    </ItemContent>



                                </Item>

                            </div>


                            <div className='p-4'>
                                <Item variant="outline">
                                    <ItemContent>
                                        <ItemTitle className='text-2xl uppercase font-black'>unidade/conversão</ItemTitle>

                                        <ItemSeparator className='mt-2 mb-3' />



                                        <ItemSeparator className='mt-2 mb-3' />

                                        <div className='grid grid-cols-2 gap-3 items-center'>

                                            <CampoColunaForm>
                                                <div>
                                                    <SSelectSigla
                                                        form={_form}
                                                        label="unidade de med. primaria"
                                                        name="sigla_unidade_primariaId"
                                                        requerido
                                                    />
                                                </div>

                                                <div>
                                                    <InputNumero
                                                        form={_form}
                                                        label="fator conversao primaria"
                                                        name="fator_conversao_primaria"
                                                    />
                                                </div>

                                            </CampoColunaForm>


                                            <CampoColunaForm>

                                                <div>
                                                    <SSelectSigla
                                                        form={_form}
                                                        label="unidade de med. secundaria"
                                                        name="sigla_unidade_secundariaId"
                                                    />
                                                </div>
                                                <div>
                                                    <InputNumero
                                                        form={_form}
                                                        label="fator conversao secundaria"
                                                        name="fator_conversao_secundaria"
                                                    />
                                                </div>


                                            </CampoColunaForm>

                                        </div>





                                    </ItemContent>
                                </Item>

                            </div>









                        </ScrollArea>


                    </div>
                </Form>
            </form >
        </>
    )
}