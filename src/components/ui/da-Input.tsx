import * as React from "react";

import { cn } from "../.@/Dominios/Comuns/infra/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";




function DAInput({ className, type, ...props }: React.ComponentProps<"input"> & { label?: string, erro?: { erro?: boolean | undefined, message?: string | undefined } }) {
  return (
    <div className="w-full max-w-sm min-w-[200px]  max-h-16 min-h-16">

      <div className="flex flex-row justify-between items-center">
        <p className="block xmb-2 text-sm text-slate-600  -translate-y-0.5">
          {props.label}
        </p>

        <div>
          <Tooltip>
            <TooltipTrigger
              className={`-translate-x-2 rounded-full hover:cursor-pointer hover:bg-slate-700 hover:w-[35px] transition duration-300 ease ${props.erro?.erro ? 'h-1 w-[14px] bg-amber-700' : 'h-0 w-0'}`}
            ></TooltipTrigger>
            <TooltipContent>
              <p className="text-lg">{props.erro?.message}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
        <input
          type={type}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className
          )}
          {...props}
        />
      </div>
    </div>
  )
}

export { DAInput };

