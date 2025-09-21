
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";

type TOptions = {
    label: string,
    value: string | undefined
}

type TextInputProps = {
    form: UseFormReturn<any>;
    name: string;
    label: string;
    options: TOptions[]
};



export default function CSelect(props: TextInputProps) {





    const initialValue = props.form.getValues()[props.name];
    const [value, setValue] = useState(initialValue);
    const [aberto, setAberto] = useState(false);

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

                        <Popover open={aberto} onOpenChange={setAberto}>
                            <PopoverTrigger asChild>

                                <FormControl>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        className={`Zw-[200px] justify-between ${!field.value && 'text-muted-foreground'}`}
                                    >
                                        {field.value
                                            ? props.options.find(
                                                (o) => o.value === field.value
                                            )?.label
                                            : "Selecione"}
                                        <ChevronsUpDown className="opacity-50" />
                                    </Button>

                                </FormControl>
                            </PopoverTrigger>

                            <PopoverContent className="max-w-[450px] p-0" >
                                <Command >
                                    <CommandInput
                                        placeholder="Pesquise..."
                                        className="h-9"
                                    />
                                    <CommandList>
                                        <CommandEmpty>Não encontrado</CommandEmpty>
                                        <CommandGroup>
                                            {props.options.map((o) => (
                                                <CommandItem
                                                    value={o.label}
                                                    key={o.value}
                                                    onSelect={(v) => {
                                                        const _o = props.options.find((i) => i.label === v)
                                                        if (v) {
                                                            setValue(_o?.value)
                                                            _change(_o?.value)
                                                            setAberto(false)
                                                        }

                                                    }}
                                                >
                                                    {o.label}
                                                    <Check
                                                        className={`ml-auto ${o.value === value
                                                            ? 'opacity-100'
                                                            : 'opacity-0'}`}

                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>

                        </Popover>
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
}