import { describe, it, expect } from 'vitest'
import { COMchainStruct } from '../../src/parser/chain'
import { parseConfString } from '../../src/parser/conf'
import { COMoutStruct } from '../../src/parser/out'


describe.todo('COM-CONF', () => {
    describe('valid', () => {
        const valid_conf_string0 = 'cv8:0,gt9:1>pth,pth;cv2:2,gt4:4;out10:0:0:1:0:1'
        const res0 = parseConfString(valid_conf_string0)
        it('', () => {
            expect(res0.chains).toStrictEqual<COMchainStruct[]>([
                {
                    index: 0,
                    input: {
                        cv: {
                            pid: 8,
                            ch: 0
                        },
                        gt: {
                            pid: 9,
                            ch: 1
                        }
                    },
                    modules: [
                        { name: 'pth', params: [] },
                        { name: 'pth', params: [] }
                    ],
                },
                {
                    index: 1,
                    input: {
                        cv: {
                            pid: 2,
                            ch: 2
                        },
                        gt: {
                            pid: 4,
                            ch: 4
                        }
                    },
                    modules: [],
                }
            ])
        })
        expect(res0.outs).toStrictEqual<COMoutStruct[]>([
            {
                destination: {
                    pid: 10,
                    ch: 0
                },
                source: {
                    cv: {
                        chain: 0,
                        module: 1
                    },
                    gt: {
                        chain: 0,
                        module: 1
                    }
                }

            }
        ])
    })
})