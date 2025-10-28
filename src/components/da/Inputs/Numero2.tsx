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
    requerido?: boolean;
    desabilitado?: boolean;
};




export default function InputNumero2(props: TextInputProps) {


    const initialValue = props.form.getValues()[props.name]
        ? props.form.getValues()[props.name]
        : "";

    const maxLenth = props.maxLenth
        ? props.maxLenth
        : 254;

    const [value, setValue] = useState(initialValue);

    useEffect(() => { setValue(initialValue); }, [initialValue]);


    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    function handleChange(realChangeFn: Function, formattedValue: string) {

        const v = formattedValue.substring(0, maxLenth)

        if (v) {

            console.log(Intl.NumberFormat('en-US', { maximumFractionDigits: 2, }).format(Number(v)));
            const _v = Intl.NumberFormat('en-US', { maximumFractionDigits: 2, }).format(Number(v))
            setValue(parseFloat(_v))
            realChangeFn(parseFloat(_v));
        } else {
            setValue(0)
            realChangeFn(0);

        }
        // const digits = v.match(/[0-9]+/g);
        // if (digits) {
        //     setValue(parseInt(digits[0]))
        //     realChangeFn(parseInt(digits[0]));
        // } else {
        //     setValue(0)
        //     realChangeFn(0);

        // }
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
                                type="number"
                                {...field}

                                onChange={(ev) => {
                                    // setValue(ev.target.value);
                                    handleChange(_change, ev.target.value);
                                }}
                                value={value}
                                disabled={props.desabilitado}
                                className="[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
}