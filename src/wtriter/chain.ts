import { COMchainStruct } from "../parser/chain";
import { writeModuleString } from "./module";

const writeINP = (prefix: string) => (inp: { pid: number, ch: number }) => `${prefix}${inp.pid}:${inp.ch}`
const writeCV = writeINP('cv')
const writeGT = writeINP('gt')

export const writeChainString = ({ input: { cv, gt }, modules }: COMchainStruct): string => {
    return `${writeCV(cv)},${writeGT(gt)}${modules.length ? '>' + modules.map(writeModuleString) : ''}`
}