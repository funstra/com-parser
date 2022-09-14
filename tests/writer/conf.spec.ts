import { describe, expect, it } from "vitest";
import { COMnetworkStruct } from "../../src/parser/conf";
import { writeNetworkString } from "../../src/wtriter/conf";

describe.todo('COM-CONF', () => {
    const valid_network_struct0: COMnetworkStruct = {
        chains: [
            {
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

            },
            {
                index: 1,
                input: {
                    cv: {
                        pid: 4,
                        ch: 4
                    },
                    gt: {
                        pid: 12,
                        ch: 2
                    }
                },
                modules: [],

            }
        ]
    }
    const res0 = writeNetworkString(valid_network_struct0)
    it('', () => {
        expect(res0).toBe('cv10:2,gt8:0>lfo300:55,pth;cv4:4,gt12:2;out10:4:0:1:0:1')
    })
})