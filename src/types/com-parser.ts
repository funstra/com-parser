export interface COMperiphial {
    pid: number, // the type of periphial, id = 8 = serial midi
    ch: number // the channel of the periphial, ex. 1-16 of midi ch or /a/path/to/thing osc adress
}

export interface COMparameter {
    // type: string // this should be an list of valid param types ex. bool, string, number
    name: string // name of parameter, ex. frequency, amplitude etc.
    value: number | null // should vary dependent on type
}

export interface COMmodule {
    type: moduleTypes // this should be an list of valid module types
    parameters: COMparameter[]
}


export type moduleTypes = 'pth' | 'lfo' | 'prob'

export interface COMchain {
    input: {
        cv: COMperiphial, // controll voltage source for the chain
        gt: COMperiphial // gate source for the chain
    }
    modules: COMmodule[] // array of modules for the chain
}

export interface COMout {
    destination: COMperiphial
    source: {
        cv?: {
            chain: number,
            module: number
        },
        gt?: {
            chain: number,
            module: number
        }
    }
}