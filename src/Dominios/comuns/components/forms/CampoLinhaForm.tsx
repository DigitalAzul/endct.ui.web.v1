import type { ReactNode } from "react"

interface BlocoFormProps {
    children: ReactNode
}


export function CampoLinhaForm({ children }: BlocoFormProps) {
    return (
        <div className='flex flex-row gap-2 flex-wrap justify-between pt-4 px-4'>
            {children}
        </div>
    )
}
