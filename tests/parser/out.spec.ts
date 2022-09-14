import { describe, expect, it } from "vitest";
import { COMoutStruct, parseOutString } from "../../src/parser/out";

describe('COM-OUT', () => {
    describe('valid', () => {
        const valid_out_string0 = 'out8:2:0:2:1:3'
        const res0 = parseOutString(valid_out_string0)
        it('', () => {
            expect(res0).toMatchObject<COMoutStruct>({
                destination: {
                    pid: 8,
                    ch: 2
                },
                source: {
                    cv: {
                        chain: 0,
                        module: 2
                    },
                    gt: {
                        chain: 1,
                        module: 3
                    }
                }
            })
        })
    })
})