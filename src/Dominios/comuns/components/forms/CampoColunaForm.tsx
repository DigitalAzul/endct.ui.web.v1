import type { ReactNode } from "react"

interface BlocoFormProps {
    children: ReactNode
}


export function CampoColunaForm({ children }: BlocoFormProps) {
    return (
        <div className='flex flex-col gap-4 flex-wrap justify-between pt-4 px-4'>
            {children}
        </div>
    )
}
