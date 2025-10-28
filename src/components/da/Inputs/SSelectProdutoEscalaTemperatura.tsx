
import { useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";

type TOptions = {
    label: string,
    value: string | number
}

type TextInputProps = {
    form: UseFormReturn<any>;
    name: string;
    label: string;
    options?: TOptions[];
    requerido?: boolean;
    desabilitado?: boolean;
    callBackFunction: (a: any) => void
};
type TOpcoes = {
    value: string,
    label: string
}


export default function SSelectProdutoEscalaTemperatura(props: TextInputProps) {

    const opcoes: TOpcoes[] = [
        {
            value: 'NAO_APLICADO',
            label: 'NÃO APLICADO'
        },
        {
            value: 'CELSIUS',
            label: 'CELSIUS'
        },
        {
            value: 'FAHRENHEIT',
            label: 'FAHRENHEIT'
        },
        {
            value: 'KELVIN',
            label: 'KELVIN'
        }

    ]




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
                        <FormLabel className="uppercase">{props.label} {props?.requerido ? <span className="w-1 h-1 rounded-full bg-amber-600"></span> : ''}</FormLabel>
                        <FormControl>

                            <Select

                                onValueChange={(v) => {
                                    setValue(v)
                                    _change(v)
                                    props.callBackFunction(v)
                                }
                                }

                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        opcoes.map((r: TOpcoes) => (

                                            <SelectItem value={r.value} key={r.value}>{r.label}</SelectItem>
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