import { describe, expect, it } from "vitest";
import { COMchainStruct, parseChainString } from "../../src/parser/chain";



describe('COM-CHAIN', () => {
    describe('valid', () => {
        const valid_chain_string0 = 'cv8:0,gt8:0>pth,lfo300:5'
        const valid_chain_string1 = 'cv8:0,gt8:0'
        const res0 = parseChainString(valid_chain_string0)
        const res1 = parseChainString(valid_chain_string1)
        it('to have property', () => {
            expect(res0).toHaveProperty('index')
            expect(res0).toHaveProperty('input')
            expect(res0).toHaveProperty('modules')
            expect(res1).toHaveProperty('index')
            expect(res1).toHaveProperty('input')
            expect(res1).toHaveProperty('modules')
        })
        it('input to match', () => {
            expect(res0.input).toMatchObject<COMchainStruct['input']>({
                cv: {
                    pid: 8,
                    ch: 0
                },
                gt: {
                    pid: 8,
                    ch: 0
                }
            })
        })
        it('modules to match', () => {
            expect(res0.modules).toStrictEqual<COMchainStruct['modules']>(
                [
                    { name: 'pth', params: [] },
                    {
                        name: 'lfo', params: [
                            { name: 'frequency', value: 300 },
                            { name: 'amplitude', value: 5 },
                        ]
                    }
                ])
        })
        expect(res1.modules).toStrictEqual<COMchainStruct['modules']>([])
    })
})