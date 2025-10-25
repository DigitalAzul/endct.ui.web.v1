
import type { ProdutoMarcaEntity } from "@/Dominios/Produto/types/ProdutoMarcaEntity";
import { OBTER_PRODUTO_MARCA } from "@/infra/graphql/query/query_Produto_Marca";
import { useLazyQuery } from "@apollo/client/react";
import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import z from 'zod';
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
    options?: TOptions[]
};
type Topcoes = {
    value: string,
    label: string
}
type produtoMarcaEntity = z.infer<typeof ProdutoMarcaEntity>;


export default function SSelectMarcaProduto(props: TextInputProps) {

    const opcoes: Topcoes[] = []
    const [obtMarca, { loading, error, data }] = useLazyQuery<{ Produto_Marcas: produtoMarcaEntity[] }>(OBTER_PRODUTO_MARCA);




    if (data && !loading && !error) {
        console.log('data Sigla::: ', JSON.stringify(data))
        console.log('data Sigla::: ', data.Produto_Marcas[0])
        data.Produto_Marcas.map((a: produtoMarcaEntity) => {
            opcoes.push(
                {
                    value: a._id,
                    label: a.titulo
                }
            )
        })
    }


    const initialValue = props.form.getValues()[props.name];
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        obtMarca()
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
                            {loading ?
                                <span className="flex items-center gap-2 text-muted-foreground animate-pulse"><RefreshCw size={14} className="animate-spin" />Obtendo dados...</span>

                                :
                                <div>
                                    {error ?
                                        <span className="flex items-center gap-2 text-red-500 animate-pulse text-sm">Erro ao obter dados!</span>

                                        :
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
                                                    opcoes.map((r: Topcoes) => (

                                                        <SelectItem value={r.value} key={r.value}>{r.label}</SelectItem>
                                                    ))
                                                }

                                            </SelectContent>
                                        </Select>
                                    }
                                </div>


                            }



                        </FormControl>
                        <FormMessage />
                    </FormItem>
                );
            }}
        />

    );
}