interface COMperiphial {
    pid: number, // the type of periphial, id = 8 = serial midi
    ch: number // the channel of the periphial, ex. 1-16 of midi ch or /a/path/to/thing osc adress
}

interface COMparameter {
    // type: string // this should be an list of valid param types ex. bool, string, number
    name: string // name of parameter, ex. frequency, amplitude etc.
    value: number | null // should vary dependent on type
}

interface COMmodule {
    type: module_types // this should be an list of valid module types
    parameters: COMparameter[]
}


type module_types = 'pth' | 'lfo' | 'prob'

interface COMchain {
    input: {
        cv: COMperiphial, // controll voltage source for the chain
        gt: COMperiphial // gate source for the chain
    }
    modules: COMmodule[] // array of modules for the chain
}

interface COMout {
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