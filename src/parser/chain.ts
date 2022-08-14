import module from "./module"
import { COMchain, COMmodule } from "../types/com-parser"
import { splitComma, slice2, splitColonInt, isNAN } from "../util"


/**
 * Parses an chain string and returns an {@link COMchain}
 * @param s chain string
 */
export default (s: string): COMchain | false => {
    if (!s) return false
    const [inputString, modulesString] = s.split('>')
    const [cv, gt] = splitComma(inputString).map(slice2).map(splitColonInt)
    // only allow strictly formated input
    if ((cv.some(isNAN) || gt.some(isNAN))) return false
    const modules = modulesString ? modulesString.split(',').map(module).filter(m => m ? true : false) as COMmodule[] : []

    return {
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
        modules
    }
}