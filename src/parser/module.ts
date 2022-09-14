import { COMmoduleStruct, COMmodule } from "../struct/module"
import { INT } from "../util/numbers"

export const parseModuleString = (s: string): COMmoduleStruct => {
    // split at none digits att start of string
    const [name, values] = s.split(/^([^\d]+)/).slice(1)
    return COMmodule(name, values.split(':').map(INT))
}