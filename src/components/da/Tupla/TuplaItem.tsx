import type { ReactNode } from "react"


interface ITuplaItemProps {
    children?: ReactNode
    label: string
    texto: string
    size?: string
    variante?: 'NORMAL' | 'ANORMAL' | 'ATENCAO'
}

export function TuplaItem({ label, texto, size, variante = 'NORMAL' }: ITuplaItemProps) {

    const classPadrao = 'uppercase xl:leading-4 leading-6'
    const sizeTirulo = size ? `text-[${size}]` : `text-[16px]`
    const opacitadeTitulo = texto.length == 0 ? 'opacity-35' : 'opacity-100'
    const classVariante = variante == 'ANORMAL' && 'text-red-500 dark:text-red-600' || variante == 'ATENCAO' && 'text-orange-400 dark:text-orange-500'


    return (
        <div className={`flex flex-col p-3 rounded-md hover:bg-muted`}>

            <div className={`${classPadrao} ${sizeTirulo} ${opacitadeTitulo} ${classVariante}`}>{texto || '---'} </div>
            <div className="text-[12px] font-light uppercase text-slate-800 dark:text-slate-400">{label}</div>

        </div>
    )

}    