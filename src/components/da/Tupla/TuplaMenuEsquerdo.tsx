import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState, type ElementType } from "react"


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
        <div className=" w-[40px] rounded-l-[10px] flex flex-row  justify-between ">

            <div className="flex flex-col justify-around items-center translate-x-[6px]">
                <Checkbox />
                <Button
                    onClick={() => _expandir()}
                    variant={"ghost"} className="flex flex-row justify-center items-center w-0">
                    {espandido == true ?
                        <ChevronUp />
                        :
                        <ChevronDown />
                    }

                </Button>

            </div>


            <Separator orientation="vertical" />
        </div>
    )
}