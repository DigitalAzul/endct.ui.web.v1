import { Separator } from "@/components/ui/separator"
import { GripVertical } from "lucide-react"
import type { ElementType } from "react"


interface IProdutoTuplaMenuDireitoProps {
    icon?: ElementType
}

export function ProdutoTuplaMenuDireito({ icon: Icon }: IProdutoTuplaMenuDireitoProps) {

    return (
        <div className="w-[40px]  rounded-r-[10px] flex flex-row justify-between">


            <Separator orientation="vertical" />

            <div className="flex flex-col justify-around items-center -translate-x-[6px]">
                <GripVertical />
            </div>
        </div>
    )
}