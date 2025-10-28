
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from 'zod';
import { produtoEschema } from '../types/ProdutoEntity';

import Calendario from '@/components/da/Inputs/Calendario';
import InputNumero from '@/components/da/Inputs/Numero';
import InputTextarea from '@/components/da/Inputs/Textarea';
import InputTexto from '@/components/da/Inputs/Texto';
import { Form } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { crudForm, TcallBackFunction, Tcf } from '../../comuns/types/crudFormEnum';

import InputNumero2 from '@/components/da/Inputs/Numero2';
import SSelectClassificacaoProduto from '@/components/da/Inputs/SSelectClassificacaoProduto';
import SSelectGruposProduto from '@/components/da/Inputs/SSelectGruposProduto ';
import SSelectMarcaProduto from '@/components/da/Inputs/SSelectMarcaProduto';
import SSelectProdutoEscalaTemperatura from '@/components/da/Inputs/SSelectProdutoEscalaTemperatura';
import SSelectSigla from '@/components/da/Inputs/SSelectSiglaProduto';
import SSelectSimNao from '@/components/da/Inputs/SSelectSimNao';
import SSelectSituacaoProduto from '@/components/da/Inputs/SSelectSituacaoProduto';
import SSelectSubGruposProduto from '@/components/da/Inputs/SSelectSubGruposProduto';
import {
    Item,
    ItemContent,
    ItemSeparator,
    ItemTitle
} from "@/components/ui/item";
import { CampoColunaForm } from '@/Dominios/comuns/components/forms/CampoColunaForm';
import { CampoLinhaForm } from '@/Dominios/comuns/components/forms/CampoLinhaForm';
import { TopoForm } from '@/Dominios/comuns/components/forms/topoForm';
import { CAD_PRODUTOS } from '@/infra/graphql/mutations/DProduto/Produto/mutation_cad_produto';
import { useMutation } from '@apollo/client/react';
import { useState } from 'react';





type produtoFormProps = z.infer<typeof produtoEschema>;
type Tprops = {
    create?: crudForm,
    callBackFunction: TcallBackFunction,
    dataForm?: produtoFormProps | null

}


export function ProdutoForm(props: Tprops) {

    const [_escala_temperatura, setEscalaTemperatura] = useState('NAO_APLICADO')
    const _callBackFunction = (a: any) => {
        setEscalaTemperatura(a)
    }

    const [_segundaUnidade, setSegundaUnidade] = useState(false)
    const cbSegundaUnd = () => {
        setSegundaUnidade(!_segundaUnidade)
    }

    const { formState: { errors } } = useForm<produtoFormProps>({ mode: "onChange" })

    const _form = useForm<produtoFormProps>({
        resolver: zodResolver(produtoEschema),
         defaultValues: {
        //     produto_marcaId: string,
        //     produto_grupoId: string,
        //     produto_sub_grupoId: string,
        //     sigla_unidade_primariaId: string,
        //     fator_conversao_primaria: number,
             ha_segunda_unidade: false,
        //     codigo_produto: string,
        //     licenca_anvisa_num: string,
        //     data_validade_licenca_anvisa: Date,
        //     referencia: string,
        //     peso_bruto: number,
        //     peso_liquido: number,
        //     situacao: unknown,
        //     classificacao: unknown,
        //     escala_temperatura: unknown,
        //     temp_max_conservacao: number,
        //     temp_min_conservacao: number,
            
        //     fator_conversao_secundaria: number,
        //     sigla_unidade_secundariaId: '',
        //     codigo_ncm: string | undefined,
        //     codigo_rms: '',
        //     descricao: '',
        //     descricao_tecnica: '',
        //     observacoes: '',
        //     imagem: '',

        }
    });


    const _onCancelar = (v: Tcf) => {
        console.log(v)
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
        },
    });


    const _onSubmit: SubmitHandler<produtoFormProps> = (dataForm: produtoFormProps) => {

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
                            _cancela={(v: Tcf) => _onCancelar(v)}
                            _situacao={{
                                loading: loading,
                                errors: errors
                            }}
                            acao={'cadastrando'}
                            entidade={'produto'}
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
                                                    label="Código do produto"
                                                    name="codigo_produto"
                                                    requerido
                                                />
                                            </div>

                                            <div className='w-[47%]'>
                                                <InputTexto
                                                    form={_form}
                                                    label="código ncm"
                                                    name="codigo_ncm"
                                                />
                                            </div>

                                        </CampoLinhaForm>



                                        <CampoColunaForm>

                                            <div>
                                                <InputTextarea
                                                    form={_form}
                                                    label="Descrição"
                                                    name="descricao"
                                                    placeholder="Descrição"
                                                    requerido
                                                />
                                            </div>

                                            <div>
                                                <InputTexto
                                                    form={_form}
                                                    label="referencia"
                                                    name="referencia"
                                                />
                                            </div>

                                            <div>
                                                <InputTextarea
                                                    form={_form}
                                                    label="descricao técnica"
                                                    name="descricao_tecnica"
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

                                        <CampoLinhaForm>

                                            <div>

                                                <SSelectSimNao
                                                    form={_form}
                                                    label="há segunda unidade?"
                                                    name="ha_segunda_unidade"
                                                    requerido
                                                    callBackFunction={() => cbSegundaUnd()}
                                                />
                                            </div>
                                        </CampoLinhaForm>

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



                            <div className='p-4'>
                                <Item variant="outline">
                                    <ItemContent>
                                        <ItemTitle className='text-2xl uppercase font-black'>dados legais/situação</ItemTitle>

                                        <ItemSeparator className='mt-2 mb-3' />


                                        <CampoLinhaForm>
                                            <div className='w-[47%]'>
                                                <InputTexto
                                                    form={_form}
                                                    label="num. licenca anvisa"
                                                    name="licenca_anvisa_num"
                                                />
                                            </div>

                                            <div className='w-[47%]'>
                                                <InputTexto
                                                    form={_form}
                                                    label="codigo_rms"
                                                    name="codigo_rms"
                                                />
                                            </div>
                                        </CampoLinhaForm>



                                        <CampoLinhaForm>

                                            <div className='w-[47%]'>
                                                <Calendario
                                                    form={_form}
                                                    label="validade licenca anvisa"
                                                    name="data_validade_licenca_anvisa"
                                                />
                                            </div>


                                            <div className='w-[47%]'>
                                                <SSelectSituacaoProduto
                                                    form={_form}
                                                    label="situação"
                                                    name="situacao"
                                                    requerido
                                                />
                                            </div>

                                        </CampoLinhaForm>
                                    </ItemContent>
                                </Item>

                            </div>




                            <div className='p-4'>
                                <Item variant="outline">
                                    <ItemContent>
                                        <ItemTitle className='text-2xl uppercase font-black'>classificação/peso</ItemTitle>

                                        <ItemSeparator className='mt-2 mb-3' />

                                        <CampoLinhaForm>

                                            <div className='w-[47%]'>
                                                <SSelectClassificacaoProduto
                                                    form={_form}
                                                    label="classificacao do produto"
                                                    name="classificacao"
                                                />
                                            </div>


                                            <div className='w-[47%]'>
                                                <SSelectMarcaProduto
                                                    form={_form}
                                                    label="marca do produto"
                                                    name="produto_marcaId"
                                                    requerido
                                                />
                                            </div>


                                        </CampoLinhaForm>
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
                                                    requerido
                                                />

                                            </div>

                                        </CampoLinhaForm>








                                        <CampoLinhaForm>

                                            <div className='w-[47%]'>
                                                <InputNumero
                                                    form={_form}
                                                    label="peso bruto em ( gramas )"
                                                    name="peso_bruto"
                                                />
                                            </div>
                                            <div className='w-[47%]'>
                                                <InputNumero
                                                    form={_form}
                                                    label="peso líquido em ( gramas )"
                                                    name="peso_liquido"
                                                />
                                            </div>

                                        </CampoLinhaForm>

                                    </ItemContent>

                                </Item>

                            </div>


                            <div className='p-4'>
                                <Item variant="outline">
                                    <ItemContent>
                                        <ItemTitle className='text-2xl uppercase font-black'>conservação</ItemTitle>

                                        <ItemSeparator className='mt-2 mb-3' />
                                        <CampoLinhaForm>
                                            <div className='w-[47%]'>
                                                <SSelectProdutoEscalaTemperatura
                                                    form={_form}
                                                    label="escala de temperatura"
                                                    name="escala_temperatura"
                                                    callBackFunction={(a: any) => _callBackFunction(a)}
                                                />
                                            </div>
                                        </CampoLinhaForm>


                                        <CampoLinhaForm>
                                            <div className='w-[47%]'>
                                                <InputNumero2
                                                    form={_form}
                                                    label={`temp max. ( ${_escala_temperatura} )`}
                                                    name="temp_max_conservacao"
                                                    placeholder='36,5'
                                                    desabilitado={_escala_temperatura == 'NAO_APLICADO'}
                                                    
                                                />
                                            </div>

                                            <div className='w-[47%]'>
                                                <InputNumero2
                                                    form={_form}
                                                    label={`temp min. ( ${_escala_temperatura} )`}
                                                    name="temp_min_conservacao"
                                                    placeholder='36,5'
                                                    desabilitado={_escala_temperatura == 'NAO_APLICADO'}
                                                    
                                                />
                                            </div>

                                        </CampoLinhaForm>



                                    </ItemContent>





                                </Item>
                            </div>



                            <div className='p-4'>
                                <Item variant="outline">
                                    <ItemContent>
                                        <ItemTitle className='text-2xl uppercase font-black'>dados gerais</ItemTitle>

                                        <ItemSeparator className='mt-2 mb-3' />


                                        <CampoLinhaForm>
                                            <div className='w-full'>
                                                <InputTextarea
                                                    form={_form}
                                                    label="observacoes"
                                                    name="observacoes"
                                                    requerido
                                                />
                                            </div>

                                            {/* FALTA FAZER UP LOAD */}
                                            <div className='h-[100px] w-full'>
                                                <InputTexto
                                                    form={_form}
                                                    label="imagem"
                                                    name="imagem"
                                                />
                                            </div>

                                        </CampoLinhaForm>


                                    </ItemContent>

                                </Item>

                            </div>


























                            {/* <div>
                                <Button type="submit" className="w-[100px]">Salvar</Button>
                            </div> */}
                        </ScrollArea>


                    </div>
                </Form>
            </form >
        </>
    )
}