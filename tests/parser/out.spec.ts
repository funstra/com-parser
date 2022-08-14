import { describe, expect, it } from "vitest";
import out from "../../src/parser/out";

describe('parsing: outstring', () => {
    it('empty string => false', () => {
        const out_object = out('')
        expect(out_object).toBe(false)
    })
    it('valid outstring => COMout', () => {
        const out_object = out('out8:4:0:0:0:0')
        expect(out_object.destination).toMatchObject({
            pid: 8,
            ch: 4
        })
        expect(out_object.source).toMatchObject({
            cv: {
                chain: 0,
                module: 0
            },
            gt: {
                chain: 0,
                module: 0
            }
        })
    })
    it('partial outstring => false', () => {
        const out_object_0 = out('out8:4:0:0:0:')
        const out_object_1 = out('t0:0:0')
        expect(out_object_0).toBe(false)
        expect(out_object_1).toBe(false)
    })
})
