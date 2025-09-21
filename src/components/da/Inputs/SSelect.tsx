
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
    options: TOptions[]
};



export default function SSelect(props: TextInputProps) {





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
                                    <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        props.options.map((r: any) => (

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