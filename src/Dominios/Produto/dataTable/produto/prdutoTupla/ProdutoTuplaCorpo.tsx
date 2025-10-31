
import type { ReactNode } from "react"


interface IProdutoTuplaCorpoProps {
    children: ReactNode
}

export function ProdutoTuplaCorpo({ children }: IProdutoTuplaCorpoProps) {

    return (
        <div className="flex flex-col gap-4 w-full p-4">

            {children}
        </div>

    )
}