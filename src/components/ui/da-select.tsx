import * as React from "react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";




function DASelect({ className, ...props }: React.ComponentProps<"select"> & { label?: string, erro?: { erro?: boolean | undefined, message?: string | undefined } }) {
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
        <Select
          onValueChange={() => onchange} >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export { DASelect };

