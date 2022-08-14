import { int, splitColon, slice, isNAN } from "../util"
const slice3 = slice(3)

/**
 * Parses an outstring and returns an {@link COMout}
 * @param s out string
 */
export default (s: string): COMout | false => {
    if (!s || !s.startsWith('out')) return false
    const parts = splitColon(slice3(s)).map(int)
    if (parts.some(isNAN)) return false
    const [pid, ch, src_cv_c, src_cv_m, src_gt_c, src_gt_m] = parts
    return {
        destination: {
            pid,
            ch
        },
        source: {
            cv: {
                chain: src_cv_c,
                module: src_cv_m
            },
            gt: {
                chain: src_gt_c,
                module: src_gt_m
            }
        }
    }
}