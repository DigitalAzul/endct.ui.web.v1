import type { ReactNode } from "react"


interface ITuplaItemProps {
    children?: ReactNode
    label: string
    texto: string
    size?: string
}

export function TuplaItem({ label, texto, size }: ITuplaItemProps) {

    const _classTit = size ? `text-[${size}]` : `text-[16px]`
    return (
        <div className="flex flex-col gap-1">
            <div className={`${_classTit} uppercase xl:leading-4 leading-6 `}>{texto} </div>
            <div className="text-[12px] font-light uppercase">{label}</div>

        </div>
    )

}