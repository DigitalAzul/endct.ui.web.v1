
import { useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../ui/select";


type TextInputProps = {
    form: UseFormReturn<any>;
    name: string;
    label: string;
};



export default function UFSelected(props: TextInputProps) {

    type Iuf = {
        sigla: string
        nome: string,
    }
    type Iregiao = {
        nome: string,
        ufs: Iuf[]
    }

    const REGIAO: Iregiao[] = [
        {
            nome: "Norte",
            ufs: [
                {
                    sigla: "AC",
                    nome: "Acre",
                },
                {
                    sigla: "AP",
                    nome: "Amapá",
                },
                {
                    sigla: "AM",
                    nome: "Amazonas",
                },
                {
                    sigla: "PA",
                    nome: "Pará",
                },
                {
                    sigla: "RO",
                    nome: "Rondônia",
                },
                {
                    sigla: "TO",
                    nome: "Tocantins",
                },
            ],
        },
        {
            nome: "Nordeste",
            ufs: [
                {
                    sigla: "AL",
                    nome: "Alagoas",
                },
                {
                    sigla: "BA",
                    nome: "Bahia",
                },
                {
                    sigla: "CE",
                    nome: "Ceará",
                },
                {
                    sigla: "MA",
                    nome: "Maranhão",
                },
                {
                    sigla: "PB",
                    nome: "Paraíba",
                },
                {
                    sigla: "PE",
                    nome: "Pernambuco",
                },
                {
                    sigla: "PI",
                    nome: "Piauí",
                },
                {
                    sigla: "RN",
                    nome: "Rio Grande do Norte",
                },
                {
                    sigla: "SE",
                    nome: "Sergipe",
                },
            ],
        },
        {
            nome: "Centro-Oeste",
            ufs: [
                {
                    sigla: "DF",
                    nome: "Distrito Federal",
                },
                {
                    sigla: "GO",
                    nome: "Goiás",
                },
                {
                    sigla: "MT",
                    nome: "Mato Grosso",
                },
                {
                    sigla: "MS",
                    nome: "Mato Grosso do Sul",
                },
            ],
        },
        {
            nome: "Sudeste",
            ufs: [
                {
                    sigla: "ES",
                    nome: "Espírito Santo",
                },
                {
                    sigla: "MG",
                    nome: "Minas Gerais",
                },
                {
                    sigla: "RJ",
                    nome: "Rio de Janeiro",
                },
                {
                    sigla: "SP",
                    nome: "São Paulo",
                },


            ],
        },
        {
            nome: "Sul",
            ufs: [
                { sigla: "PR", nome: "Paraná" },
                { sigla: "RS", nome: "Rio Grande do Sul" },
                { sigla: "SC", nome: "Santa Catarina" },
            ],
        },
    ];


    const initialValue = props.form.getValues()[props.name];
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);



    return (
        <FormField
            control={props.form.control}
            name={props.name}
            render={({ field }) => {
                field.value = value;
                const _change = field.onChange;

                return (
                    <FormItem>
                        <FormLabel className="uppercase">{props.label}</FormLabel>
                        <FormControl>

                            <Select

                                onValueChange={(v) => {
                                    setValue(v)
                                    _change(v)

                                }
                                }
                                defaultValue={value}
                            >
                                <SelectTrigger className="w-[180px]">


                                    <SelectValue>

                                        {value != "ZZ"
                                            ? REGIAO.map((r) =>
                                                r.ufs.find(
                                                    (op: Iuf) => op.sigla === value,
                                                )?.nome
                                            )
                                            : 'Selecione'
                                        }
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        REGIAO.map((r: Iregiao) => (

                                            <SelectGroup key={r.nome}>
                                                <SelectLabel>{r.nome}</SelectLabel>
                                                {
                                                    r.ufs.map((u: Iuf) => (
                                                        <SelectItem value={u.sigla} key={u.sigla}>{u.nome}</SelectItem>
                                                    ))
                                                }

                                            </SelectGroup>
                                        ))
                                    }

                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
}