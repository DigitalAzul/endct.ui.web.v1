import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, type ElementType } from "react";


interface ITuplaMenuEsquerdoProps {
    icon?: ElementType
    expandidoFn?: () => void;
}

export function TuplaMenuEsquerdo({ icon: Icon, expandidoFn = () => { } }: ITuplaMenuEsquerdoProps) {

    const [espandido, setExpadido] = useState(false)

    const _expandir = () => {
        setExpadido(!espandido);
        expandidoFn()
    }

    return (
        <div className=" w-[60px] h-[150px] rounded-l-[10px] flex flex-row  justify-between px-2 ">

            <div className="flex flex-col justify-around items-center">
                <Checkbox />
                <div
                    onClick={() => _expandir()}
                    className="flex flex-row justify-center items-center">

                    {espandido == true ?
                        <ChevronUp className="hover:text-muted" />
                        :
                        <ChevronDown className="hover:text-muted" />
                    }

                </div>

            </div>



        </div>
    )
}