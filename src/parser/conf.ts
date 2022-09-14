import { COMchainStruct, parseChainString } from "./chain"
import { COMoutStruct, parseOutString } from "./out"

export interface COMperiphial {
    pid: number
    ch: number
}

export interface COMnetworkStruct {
    chains: COMchainStruct[]
    outs: COMoutStruct[]
}

const noOut = (s: string) => !s.startsWith('out')
const Out = (s: string) => s.startsWith('out')

export const parseConfString = (s: string): COMnetworkStruct => {
    const parts = s.split(';')
    const chains = parts.filter(noOut).map(parseChainString)
    const outs = parts.filter(Out).map(parseOutString)
    return {
        chains,
        outs
    }
}