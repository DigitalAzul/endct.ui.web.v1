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
    requerido?: boolean
};




export default function InputTexto(props: TextInputProps) {


    const initialValue = props.form.getValues()[props.name]
        ? props.form.getValues()[props.name]
        : "";

    const maxLenth = props.maxLenth
        ? props.maxLenth
        : 254;

    const [value, setValue] = useState(initialValue);

    useEffect(() => { setValue(initialValue); }, [initialValue]);


    function handleChange(realChangeFn: Function, formattedValue: string) {

        const v = formattedValue.substring(0, maxLenth)

        if (v) {
            setValue(v)
            realChangeFn(v);
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
                    <FormItem>
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
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
}