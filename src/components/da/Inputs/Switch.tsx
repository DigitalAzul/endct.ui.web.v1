//https://gist.github.com/Sutil/5285f2e5a912dcf14fc23393dac97fed

import { useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { Switch } from "../../ui/switch";
; // Shandcn UI Input

type TextInputProps = {
    form: UseFormReturn<any>;
    name: string;
    label?: string;
    placeholder?: string;
    maxLenth?: number;
    requerido?: boolean
};




export default function InputSwitch(props: TextInputProps) {


    const initialValue = props.form.getValues()[props.name]
        ? props.form.getValues()[props.name]
        : "";


    const [value, setValue] = useState(initialValue);

    useEffect(() => { setValue(initialValue); }, [initialValue]);


    function handleChange(realChangeFn: Function, formattedValue: boolean) {

        console.log(formattedValue)
        setValue(formattedValue)
        realChangeFn(formattedValue);

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
                        <div className="flex items-center gap-3 border p-1 px-2 rounded-3xl w-[130px]">
                            <FormControl>
                                <Switch
                                    checked={field.value}
                                    onCheckedChange={(ev) => {
                                        handleChange(_change, ev);
                                    }}
                                    value={value}
                                />
                            </FormControl>
                            <span>{value ? 'SIM' : 'NÃO'}</span>
                        </div>
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
}