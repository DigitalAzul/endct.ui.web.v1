
import { useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";

type TOptions = {
    label: string,
    value: string
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
    value: boolean,
    label: string
}
type _TOpcoes = {
    value: string,
    label: string
}


export default function SSelectSimNao(props: TextInputProps) {

    const opcoes: TOpcoes[] = [
        {
            value: true,
            label: 'SIM'
        },
        {
            value: false,
            label: 'NÃO'
        },
    ]




    const initialValue = props.form.getValues()[props.name];
    const [value, setValue] = useState(initialValue)
    const [_options, set_Options] = useState<_TOpcoes[]>()




    useEffect(() => {
        set_Options([
            {
                value: 'SIM',
                label: 'SIM'
            },
            {
                value: 'NAO',
                label: 'NÃO'
            },
        ])

        // console.log('initialValue FORA', initialValue)
        // // setValue(initialValue);
        // if (initialValue == true) {
        //     setValue('SIM')
        //     console.log('initialValue DENTRO', initialValue)
        // } else {
        //     setValue('NAO')
        //     console.log('initialValue ELSE', initialValue)
        // }
    }, [initialValue]);




    return (

        <FormField
            control={props.form.control}
            name={props.name}
            render={({ field }) => {
                field.value = value;
                const _change = field.onChange;
                console.log('render', value);
                return (
                    <FormItem>
                        <FormLabel className="uppercase">{props.label} {props?.requerido ? <span className="w-1 h-1 rounded-full bg-amber-600"></span> : ''}</FormLabel>
                        <FormControl>

                            <Select
                                value={value == true ? 'SIM' : 'NAO'}
                                onValueChange={(v) => {
                                    setValue(v == 'SIM' ? true : false)
                                    _change(v == 'SIM' ? true : false)
                                    // _change(v)
                                    props.callBackFunction(v)
                                }
                                }

                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        _options?.map((r: _TOpcoes) => (
                                            <SelectItem value={r.value} key={r.label}>{r.label}</SelectItem>
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