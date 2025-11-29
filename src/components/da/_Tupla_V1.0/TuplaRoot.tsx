import type { ReactNode } from "react"


interface ITuplaRootProps {
    children: ReactNode
}


export function TuplaRoot({ children }: ITuplaRootProps) {
    return (
        <div className="flex flex-row justify-between min-h-[120px] rounded-[10px] border">
            {children}
        </div>
    )
}