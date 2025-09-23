
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from 'zod';
import { produtoEschema } from '../types/ProdutoEntity';

import Calendario from '@/components/da/Inputs/Calendario';
import InputNumero from '@/components/da/Inputs/Numero';
import SSelect from '@/components/da/Inputs/SSelect';
import InputTextarea from '@/components/da/Inputs/Textarea';
import InputTexto from '@/components/da/Inputs/Texto';
import { Form } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import type { crudForm, TcallBackFunction, Tcf } from '../../comuns/types/crudFormEnum';

import { CampoColunaForm } from '@/Dominios/comuns/components/forms/CampoColunaForm';
import { CampoLinhaForm } from '@/Dominios/comuns/components/forms/CampoLinhaForm';
import { TopoForm } from '@/Dominios/comuns/components/forms/topoForm';
import { fakerPT_BR as faker, simpleFaker } from '@faker-js/faker';




type produtoFormProps = z.infer<typeof produtoEschema>;
type Tprops = {
    create?: crudForm,
    callBackFunction: TcallBackFunction,
    dataForm?: produtoFormProps | null

}


export function ProdutoForm(props: Tprops) {

    const [loading, setLoading] = useState(false)



    const { formState: { errors } } = useForm<produtoFormProps>()

    const _form = useForm<produtoFormProps>({
        resolver: zodResolver(produtoEschema),
        defaultValues: {
            codigo_produto: simpleFaker.string.alphanumeric({ length: 10 }).toUpperCase(),
            codigo_ncm: simpleFaker.string.alphanumeric({ length: 10 }).toUpperCase(),

            sigla_unidade_primaria_id: faker.number.romanNumeral().toString(),
            fator_conversao_primaria: faker.number.romanNumeral().toString(),
            ha_segunda_unidade: faker.number.romanNumeral().toString(),
            sigla_unidade_secundaria_id: faker.number.romanNumeral().toString(),
            fator_conversao_secundaria: faker.number.romanNumeral().toString(),


            licenca_anvisa_num: faker.number.romanNumeral().toString(),
            codigo_rms: faker.number.romanNumeral().toString(),

            data_validade_licenca_anvisa: faker.date.anytime(),
            situacao: faker.number.romanNumeral().toString(),

            descricao: faker.number.romanNumeral().toString(),
            referencia: faker.number.romanNumeral().toString(),
            descricao_tecnica: faker.number.romanNumeral().toString(),


            grupo_produto_id: faker.number.romanNumeral().toString(),
            sub_grupo_produto_id: faker.number.romanNumeral().toString(),
            marca_produto_id: '12345abcde',
            tipo_produto: faker.number.romanNumeral().toString(),

            temp_max_conservacao: faker.number.romanNumeral().toString(),
            temp_min_conservacao: faker.number.romanNumeral().toString(),

            peso_bruto: '9999999999',
            peso_liquido: '999999999',


            imagem: faker.number.romanNumeral().toString(),
            observacoes: faker.number.romanNumeral().toString(),
        }
    });
    // defaultValuesCopy: {
    //     codigo_produto: faker.number.romanNumeral().toString(),
    //         codigo_ncm: '',

    //         sigla_unidade_primaria_id: '',
    //             fator_conversao_primaria: '',
    //                 ha_segunda_unidade: '',
    //                     sigla_unidade_secundaria_id: '',
    //                         fator_conversao_secundaria: '',


    //         licenca_anvisa_num: '',
    //             codigo_rms: '',

    //         data_validade_licenca_anvisa: undefined,
    //             situacao: '',

    //         descricao: '',
    //             referencia: '',
    //                 descricao_tecnica: '',


    //         grupo_produto_id: '',
    //             sub_grupo_produto_id: '',
    //                 marca_produto_id: '',
    //                     tipo_produto: '',

    //         temp_max_conservacao: '',
    //             temp_min_conservacao: '',

    //         peso_bruto: '9999999999',
    //             peso_liquido: '999999999',


    //         imagem: '',
    //             observacoes: '',
    // }


    const _onCancelar = (v: Tcf) => {
        console.log(v)
    }
    const _onResetar = () => {
        console.log('resetou')
        _form.reset()
    }
    const _onSubmit: SubmitHandler<produtoFormProps> = (data: produtoFormProps) => console.log(data)


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

                            <CampoLinhaForm>

                                <div>
                                    <InputTexto
                                        form={_form}
                                        label="Código do produto"
                                        name="codigo_produto"
                                    />
                                </div>

                                <div>
                                    <InputTexto
                                        form={_form}
                                        label="código ncm"
                                        name="codigo_ncm"
                                    />
                                </div>

                            </CampoLinhaForm>


                            <CampoLinhaForm>
                                <div>
                                    <SSelect
                                        form={_form}
                                        label="Sigla unidade de med."
                                        name="sigla_unidade_primaria_id"
                                        options={[
                                            { value: '12345abcde', label: 'ATIVO' },
                                            { value: '12345PIOPU', label: 'DESATIVADO' },
                                            { value: 'JKHSDGF435', label: 'EXCLUÍDO' },
                                        ]}
                                    />
                                </div>
                                <div>
                                    <SSelect
                                        form={_form}
                                        label="Sigla unidade de med."
                                        name="sigla_unidade_secundaria_id"
                                        options={[
                                            { value: '12345abcde', label: 'ATIVO' },
                                            { value: '12345PIOPU', label: 'DESATIVADO' },
                                            { value: 'JKHSDGF435', label: 'EXCLUÍDO' },
                                        ]}
                                    />
                                </div>
                            </CampoLinhaForm>

                            <CampoLinhaForm>

                                <div>
                                    <InputTexto
                                        form={_form}
                                        label="fator conversao primaria"
                                        name="fator_conversao_primaria"
                                    />
                                </div>
                                <div>
                                    <InputTexto
                                        form={_form}
                                        label="fator conversao secundaria"
                                        name="fator_conversao_secundaria"
                                    />
                                </div>


                            </CampoLinhaForm>

                            <CampoLinhaForm>
                                <div>
                                    <InputTexto
                                        form={_form}
                                        label="num. licenca anvisa"
                                        name="licenca_anvisa_num"
                                    />
                                </div>

                                <div>
                                    <InputTexto
                                        form={_form}
                                        label="codigo_rms"
                                        name="codigo_rms"
                                    />
                                </div>
                            </CampoLinhaForm>

                            <CampoLinhaForm>

                                <div>
                                    <Calendario
                                        form={_form}
                                        label="validade licenca anvisa"
                                        name="data_validade_licenca_anvisa"
                                    />
                                </div>


                                <div>
                                    <SSelect
                                        form={_form}
                                        label="situação"
                                        name="situacao"
                                        options={[
                                            { value: '12345abcde', label: 'ATIVO' },
                                            { value: '12345PIOPU', label: 'DESATIVADO' },
                                            { value: 'JKHSDGF435', label: 'EXCLUÍDO' },
                                        ]}
                                    />
                                </div>

                            </CampoLinhaForm>


                            <CampoColunaForm>

                                <div>
                                    <InputTexto
                                        form={_form}
                                        label="Descrição"
                                        name="descricao"
                                        placeholder="Descrição"

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



                            <CampoLinhaForm>

                                <div>
                                    <SSelect
                                        form={_form}
                                        label="Grupo do produto"
                                        name="grupo_produto_id"
                                        options={[
                                            { value: '12345abcde', label: 'JURIDICA' },
                                            { value: '12345PIOPU', label: 'FISICA' },
                                            { value: 'JKHSDGF435', label: 'PÚBLICA' },
                                        ]}
                                    />
                                </div>
                                <div>
                                    <SSelect
                                        form={_form}
                                        label="Sub Grupo do produto"
                                        name="sub_grupo_produto_id"
                                        options={[
                                            { value: '12345abcde', label: 'JURIDICA' },
                                            { value: '12345PIOPU', label: 'FISICA' },
                                            { value: 'JKHSDGF435', label: 'PÚBLICA' },
                                        ]}
                                    />
                                </div>

                            </CampoLinhaForm>

                            <CampoLinhaForm>

                                <div>
                                    <SSelect
                                        form={_form}
                                        label="marca do produto"
                                        name="marca_produto_id"
                                        options={[
                                            { value: '12345abcde', label: 'JURIDICA' },
                                            { value: '12345PIOPU', label: 'FISICA' },
                                            { value: 'JKHSDGF435', label: 'PÚBLICA' },
                                        ]}
                                    />
                                </div>

                                <div>
                                    <SSelect
                                        form={_form}
                                        label="tipo do produto"
                                        name="tipo_produto"
                                        options={[
                                            { value: '12345abcde', label: 'TIPO A' },
                                            { value: '12345PIOPU', label: 'TIPO B' },
                                            { value: 'JKHSDGF435', label: 'TIPO C' },
                                        ]}
                                    />
                                </div>

                            </CampoLinhaForm>





                            <CampoLinhaForm>

                                <div>
                                    <InputNumero
                                        form={_form}
                                        label="temp max. ( celcus )"
                                        name="temp_max_conservacao"
                                    />
                                </div>

                                <div>
                                    <InputNumero
                                        form={_form}
                                        label="temp mim. ( celcus )"
                                        name="temp_max_conservacao"
                                    />
                                </div>

                            </CampoLinhaForm>



                            <CampoLinhaForm>

                                <div>
                                    <InputNumero
                                        form={_form}
                                        label="peso bruto em ( gramas )"
                                        name="peso_bruto"
                                    />
                                </div>
                                <div>
                                    <InputNumero
                                        form={_form}
                                        label="peso líquido em ( gramas )"
                                        name="peso_liquido"
                                    />
                                </div>

                            </CampoLinhaForm>



                            <CampoLinhaForm>
                                {/* FALTA FAZER UP LOAD */}
                                <div className='w-full'>
                                    <InputTextarea
                                        form={_form}
                                        label="observacoes"
                                        name="observacoes"

                                    />
                                </div>

                                <div className='h-[100px] w-full'>
                                    <InputTexto
                                        form={_form}
                                        label="imagem"
                                        name="imagem"
                                    />
                                </div>

                            </CampoLinhaForm>







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