import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ChevronDown } from "lucide-react"
import type { ElementType } from "react"


interface IProdutoTuplaMenuEsquerdoProps {
    icon?: ElementType
}

export function ProdutoTuplaMenuEsquerdo({ icon: Icon }: IProdutoTuplaMenuEsquerdoProps) {

    return (
        <div className=" w-[40px] rounded-l-[10px] flex flex-row  justify-between ">

            <div className="flex flex-col justify-around items-center translate-x-[6px]">
                {/* <Icon className="" /> */}
                <Checkbox />
                <ChevronDown />
            </div>


            <Separator orientation="vertical" />
        </div>
    )
}