import { COMmoduleStruct, parseModuleString } from "./module"
import { COMperiphial } from "./conf"

export interface COMchainStruct {
    index: number
    input: {
        cv: COMperiphial
        gt: COMperiphial
    }
    modules: COMmoduleStruct[]
}
export const parseChainString = (s: string, index: number = 0): COMchainStruct => {
    const [input, modules] = s.split('>')
    const input_strings = input.split(',')
    const [cv, gt] = input_strings.map(s => s.slice(2).split(':').map(d => parseInt(d)))

    return {
        index,
        input: {
            cv: {
                pid: cv[0],
                ch: cv[1]
            },
            gt: {
                pid: gt[0],
                ch: gt[1]
            }
        },
        modules: modules ? modules.split(',').map(parseModuleString) : [],
    }
}
