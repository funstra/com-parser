import { describe, expect, it } from "vitest";
import { COMoutStruct } from "../../src/parser/out";
import { writeOutString } from "../../src/wtriter/out";

describe('COM-OUT', () => {
    const valid_out_struct0: COMoutStruct = {
        destination: {
            pid: 10,
            ch: 4
        },
        source: {
            cv: {
                chain: 0,
                module: 2
            },
            gt: {
                chain: 1,
                module: 1
            }
        }
    }
    const res0 = writeOutString(valid_out_struct0)
    it('', () => {
        expect(res0).toBe('out10:4:0:2:1:1')
    })
})