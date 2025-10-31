import type { ReactNode } from "react"


interface IProdutoTuplaRootProps {
    children: ReactNode
}


export function ProdutoTuplaRoot({ children }: IProdutoTuplaRootProps) {
    return (
        <div className="flex flex-row justify-between min-h-[120px] rounded-[10px] border">
            {children}
        </div>
    )
}