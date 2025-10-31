import type { ReactNode } from "react"


interface IProdutoTuplaItemProps {
    children?: ReactNode
    label: string
    texto: string
}

export function ProdutoTuplaItem({ label, texto }: IProdutoTuplaItemProps) {

    return (
        <div className="flex flex-col gap-1">
            <div className="text-[16px] uppercase leading-4">{texto} </div>
            <div className="text-[12px] font-light uppercase">{label}</div>

        </div>
    )

}