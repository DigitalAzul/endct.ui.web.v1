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
    maxLenth?: number
};




export default function InputNumero(props: TextInputProps) {


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

        const digits = v.match(/[0-9]+/g);
        if (digits) {
            setValue(digits[0])
            realChangeFn(digits[0]);
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
                        <FormLabel className="uppercase">{props.label}</FormLabel>
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