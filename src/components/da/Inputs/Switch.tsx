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
    maxLenth?: number
};




export default function InputSwitch(props: TextInputProps) {


    const initialValue = props.form.getValues()[props.name]
        ? props.form.getValues()[props.name]
        : "";


    const [value, setValue] = useState(initialValue);

    useEffect(() => { setValue(initialValue); }, [initialValue]);


    function handleChange(realChangeFn: Function, formattedValue: boolean) {

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
                        <FormLabel className="uppercase">{props.label}</FormLabel>
                        <FormControl>
                            <Switch
                                checked={field.value}
                                onCheckedChange={(ev) => {
                                    handleChange(_change, ev);
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