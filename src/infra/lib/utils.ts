import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export async function pause(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}


export function CamposAlterados<T extends Record<string, any>>(obj: T, objAlter: any): Partial<T> {

    const result: Partial<T> = {};

    for (const [key, value] of Object.entries(obj)) {
        // Check for null or undefined
        if (value === null || value === undefined) {
            continue;
        }

        // Check for empty string
        if (typeof value === 'string' && value.trim() === '') {
            continue;
        }

        // Check for empty array
        if (Array.isArray(value) && value.length === 0) {
            continue;
        }

        // Check for empty object (if it's an object and not an array)
        if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) {
            continue;
        }

        // If none of the above conditions are met, the property is considered non-empty
        for (const [_key, _value] of Object.entries(objAlter)) {
            if (_key == key) {
                console.log('chave igual')
                result[key as keyof T] = value;
            }
        }
    }

    return result;

}