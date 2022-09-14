import { COMparamStruct } from "../parser/param";

export interface COMmoduleStruct {
    name: string,
    params: COMparamStruct[]
}

type module_types = 'pth' | 'lfo' | 'prob' | string

const param_lookup: Record<module_types, COMparamStruct[]> = {
    pth: [],
    lfo: [
        {
            name: 'frequency',
            value: 30
        },
        {
            name: 'amplitude',
            value: 1
        }
    ],
    prob: [
        {
            name: 'chance',
            value: 0.5
        }
    ]
}




export const COMmodule = <MT extends module_types>(name: MT, paramInit?: number[]): COMmoduleStruct => {
    return {
        name,
        params: paramInit
            ? [...param_lookup[name]].map((p, i) => ({ ...p, value: paramInit[i] }))
            : [...param_lookup[name]]
    }
}
