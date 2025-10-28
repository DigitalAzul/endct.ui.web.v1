//https://gist.github.com/Sutil/5285f2e5a912dcf14fc23393dac97fed

import { useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { Input } from "../../ui/input";
; // Shandcn UI Input

type TextInputProps = {
    form: UseFormReturn<any>;
    name: string;
    label?: string;
    placeholder?: string;
    maxLenth?: number;
    decimais?: number;
    requerido?: boolean;
    desabilitado?: boolean;
};




export default function InputNumeroFloat(props: TextInputProps) {


    const initialValue = props.form.getValues()[props.name]
        ? props.form.getValues()[props.name]
        : "";

    const maxLenth = props.maxLenth
        ? props.maxLenth
        : 254;

    const [value, setValue] = useState(initialValue);
    const [decimais, setDecimais] = useState(props.decimais);

    useEffect(() => {
        setValue(initialValue);
        setDecimais(props.decimais)
    }, [initialValue]);


    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    function handleChange(realChangeFn: Function, formattedValue: string) {

        const v = formattedValue.substring(0, maxLenth)
        let digits

        const _digits = v.replace(/\D+/, '')
        const m = "/^(\d+)(\d{1})$/"
        switch (decimais) {
            case 1:
                digits = _digits.replace(/^(\d+)(\d{1})$/, '$1,$2');
                break;
            case 2:
                digits = _digits.replace(/^(\d+)(\d{2})$/, '$1,$2');
                break;
            case 3:
                digits = _digits.replace(/^(\d+)(\d{3})$/, '$1,$2');
                break;
            case 4:
                digits = _digits.replace(/^(\d+)(\d{4})$/, '$1,$2');
                break;

            default:
                break;
        }


        if (digits) {
            setValue(digits)
            realChangeFn(digits);
        } else {
            setValue("")
            realChangeFn("");

        }
    }

    return (
        <FormField
            control={props.form.control}
            name={props.name}
            render={({ field }) => {
                field.value = value;
                const _change = field.onChange;

                return (
                    <FormItem className={`${props.desabilitado ? 'opacity-50 pointer-events-none' : ''}`}>
                        <FormLabel className="uppercase">{props.label} {props?.requerido ? <span className="w-1 h-1 rounded-full bg-amber-600"></span> : ''}</FormLabel>
                        <FormControl>
                            <Input
                                placeholder={props.placeholder}
                                type="text"
                                {...field}

                                onChange={(ev) => {
                                    // setValue(ev.target.value);
                                    handleChange(_change, ev.target.value);
                                }}
                                value={value}
                                disabled={props.desabilitado}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
}