
import CSelect from '@/components/da/Inputs/CSelect';
import MoneyInput from '@/components/da/Inputs/Moeda';
import InputNumero from '@/components/da/Inputs/Numero';
import SSelect from '@/components/da/Inputs/SSelect';
import InputSwitch from '@/components/da/Inputs/Switch';
import InputTextarea from '@/components/da/Inputs/Textarea';
import InputTexto from '@/components/da/Inputs/Texto';
import UFSelected from '@/components/da/Inputs/UFSelect';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from 'zod';
import { testeEschema } from '../types/ProdutoEntity';

type tF = {
    type: 'TEXTO' | 'NUMERO' | 'MOEDA' | 'TEXTOAREA' | 'SWITCH',
    name: string,
    label: string,
    placeholder: string,
    required: boolean,
    options?: string[]
}

export function TesteForm() {

    const {
        handleSubmit,
        formState: { errors },
    } = useForm()

    type testeForm = z.infer<typeof testeEschema>;

    const formTeste = useForm<testeForm>({
        resolver: zodResolver(testeEschema),
        defaultValues: {
            nome: 'Luiz',
            cpfcnpj: '99999999999999',
            descricao: 'dark',
            custo: 12.12,
            importado: true,
            uf: 'SP',
            tipo_pessoa: '',
            marca: ''
        }
    });



    const _onSubmit: SubmitHandler<testeForm> = (data: testeForm) => console.log(data)


    return (
        <>
            <form onSubmit={formTeste.handleSubmit(_onSubmit)}>


                <Form {...formTeste}>
                    <div className="flex flex-col gap-3">
                        <div>
                            <InputTexto
                                form={formTeste}
                                label="Nome"
                                name="nome"
                                placeholder="Nome"

                            />
                        </div>
                        <div>
                            <InputNumero
                                form={formTeste}
                                label="CPF/CNPJ"
                                name="cpfcnpj"
                                placeholder="CPF/CNPJ"

                            />
                        </div>
                        <div>
                            <InputTextarea
                                form={formTeste}
                                label="Descrição"
                                name="descricao"
                                placeholder="Descrição"

                            />
                        </div>
                        <div>
                            <MoneyInput
                                form={formTeste}
                                label="Custo"
                                name="custo"
                                placeholder="Custo"

                            />
                        </div>
                        <div>
                            <InputSwitch
                                form={formTeste}
                                label="Importado"
                                name="importado"
                                placeholder="importado"

                            />
                        </div>
                        <div>
                            <UFSelected
                                form={formTeste}
                                label="UF"
                                name="uf"

                            />
                        </div>
                        <div>
                            <SSelect
                                form={formTeste}
                                label="Tipo de Pessoa"
                                name="tipo_pessoa"
                                options={[
                                    { value: '12345abcde', label: 'JURIDICA' },
                                    { value: '12345PIOPU', label: 'FISICA' },
                                    { value: 'JKHSDGF435', label: 'PÚBLICA' },
                                ]}
                            />
                        </div>
                        <div className='max-w-[500px]'>
                            <CSelect
                                form={formTeste}
                                label="Marca"
                                name="marca"
                                options={[
                                    { value: '12345abcde', label: 'JJ' },
                                    { value: '12345PIOPU', label: 'CREMEDE' },
                                    { value: 'JKHSDGF435', label: 'ONCOLOGICO sdfsdfsdf' },
                                ]}
                            />
                        </div>


                        <div>
                            <Button type="submit" className="w-[100px]">Salvar</Button>
                        </div>
                    </div>
                </Form>

            </form>

        </>
    )
}