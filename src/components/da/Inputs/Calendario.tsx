
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";

import { Calendar } from "@/components/ui/calendar";


type TextInputProps = {
    form: UseFormReturn<any>;
    name: string;
    label: string;

};



export default function Calendario(props: TextInputProps) {





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
                                        variant={"outline"}
                                        className={`w-[240px] pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}

                                    >
                                        {field.value ? (
                                            format(field.value, "PPP", { locale: ptBR })
                                        ) : (
                                            <span>Selecione uma data</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={(v) => {
                                        setValue(v)
                                        _change(v)
                                        setAberto(false)
                                    }}
                                    // disabled={(date) =>
                                    //     date > new Date() || date < new Date("1900-01-01")
                                    // }
                                    //captionLayout="dropdown"
                                    locale={ptBR}
                                />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
}