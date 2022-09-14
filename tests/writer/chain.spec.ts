import { describe, expect, it } from "vitest";
import { COMchainStruct } from "../../src/parser/chain";
import { writeChainString } from "../../src/wtriter/chain";


describe('COM-CHAIN', () => {
    const valid_chain_struct0: COMchainStruct = {
        index: 0,
        input: {
            cv: {
                pid: 10,
                ch: 2
            },
            gt: {
                pid: 8,
                ch: 0
            }
        },
        modules: [
            {
                name: 'lfo', params: [
                    { name: 'frequency', value: 300 },
                    { name: 'amplitude', value: 55 }
                ]
            },
            {
                name: 'pth', params: []
            }
        ],
        outs: []

    }
    const valid_chain_struct1: COMchainStruct = {
        index: 0,
        input: {
            cv: {
                pid: 10,
                ch: 2
            },
            gt: {
                pid: 8,
                ch: 0
            }
        },
        modules: [],
        outs: []
    }
    const res0 = writeChainString(valid_chain_struct0)
    const res1 = writeChainString(valid_chain_struct1)
    it('', () => {
        expect(res0).toBe('cv10:2,gt8:0>lfo300:55,pth')
    })
    it('', () => {
        expect(res1).toBe('cv10:2,gt8:0')
    })
})