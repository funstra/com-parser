import { COMoutStruct } from "../parser/out"

export const writeOutString = ({ destination: d, source: { cv: c, gt: g } }: COMoutStruct): string => {
    return `out${d.pid}:${d.ch}:${c.chain}:${c.module}:${g.chain}:${g.module}`
}