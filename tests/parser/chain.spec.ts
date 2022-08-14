import { describe, it, expect } from "vitest";
import chain from '../../src/parser/chain'


describe('', () => {

    describe('with: an empty string', () => {
        it('should: return false', () => {
            expect(chain('')).toBeFalsy()
        })

    })

    describe('with: wrong format', () => {
        describe('like: cv/gt IDENTIFIER is missing', () => {
            // TODO
            it.todo('should: return false', () => {
                const chain_object = chain('8:0,v0:3')
                expect(chain_object).toBeFalsy()
            })
        })
        describe('like: pid/cv value is missing', () => {
            it('should: return false', () => {
                const chain_object = chain('cv,gt')
                expect(chain_object).toBeFalsy()
            })
        })
        describe('like: cv/gt is', () => {
            it('cv or gt missing', () => {
                const chain_object_cv = chain('cv8:0,')
                const chain_object_gt = chain(',gt8:0')
                expect(chain_object_cv).toBeFalsy()
                expect(chain_object_gt).toBeFalsy()
            })
        })
    })

    describe('with: valid chain string', () => {
        describe('with: empty module string', () => {
            it('should: return an COMchain object, with empty modules array', () => {
                const chain_object = chain('cv8:0,gt8:1')
                const match_object: COMchain = {
                    input: {
                        cv: {
                            pid: 8,
                            ch: 0
                        },
                        gt: {
                            pid: 8,
                            ch: 1
                        },
                    },
                    modules: []
                }
                expect(chain_object).toMatchObject(match_object)
            })
        })
        it('with modules, return COMchain with COMmodule array', () => {
            const chain_object = chain('cv8:0,gt8:1>lfo100:5,prob20')
            const match_object: COMchain = {
                input: {
                    cv: {
                        pid: 8,
                        ch: 0
                    },
                    gt: {
                        pid: 8,
                        ch: 1
                    }
                },
                modules: [
                    {
                        type: 'lfo',
                        parameters: [
                            { name: 'frequency', value: 100 },
                            { name: 'amplitude', value: 5 }
                        ]
                    },
                    {
                        type: 'prob',
                        parameters: [
                            { name: 'chance', value: 20 }
                        ]
                    }
                ]
            }
            expect(chain_object).toMatchObject(match_object)
        })
    })

})