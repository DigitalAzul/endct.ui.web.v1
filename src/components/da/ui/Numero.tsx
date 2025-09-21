//https://gist.github.com/Sutil/5285f2e5a912dcf14fc23393dac97fed

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
; // Shandcn UI Input

type TextInputProps = {
    // form: UseFormReturn<any>;
    //register: RegisterOptions;
    name: string;
    label?: string;
    placeholder?: string;
    maxLenth?: number;
    schema: any;
    valor: any;
};




export default function InputNumero(props: TextInputProps) {

    type Eschema = z.infer<typeof props.schema>;

    const { register, formState: { errors } } = useForm<Eschema>({
        resolver: zodResolver(props.schema)
    });


    const initialValue = props.valor
        ? props.valor
        : "";

    const maxLenth = props.maxLenth
        ? props.maxLenth
        : 254;

    const [value, setValue] = useState(initialValue);

    useEffect(() => { setValue(initialValue); }, [initialValue]);


    // function handleChange(realChangeFn: Function, formattedValue: string) {

    //     const v = formattedValue.substring(0, maxLenth)

    //     const digits = v.match(/[0-9]+/g);
    //     if (digits) {
    //         setValue(digits)
    //         realChangeFn(digits);
    //     } else {
    //         setValue("")
    //         realChangeFn("");

    //     }
    // }

    return (
        <>
            <input className='Zinput'
                value={value}
                {...register(props.name)}

                onChange={(ev) => {
                    setValue(ev.target.value);
                }}
            />
            {errors['props.name'] && <p> {"erro"}</p>}

        </>
    );
}