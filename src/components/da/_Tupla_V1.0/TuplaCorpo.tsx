
import { Separator } from "@/components/ui/separator"
import type { ReactNode } from "react"


interface ITuplaCorpoProps {
    children: ReactNode
}

export function TuplaCorpo({ children }: ITuplaCorpoProps) {

    return (
        <div className="flex flex-row justify-start">
            <Separator orientation="vertical" />
            <div className="flex flex-col gap-4 w-full p-4">
                {children}
            </div>
            <Separator orientation="vertical" />
        </div>


    )
}