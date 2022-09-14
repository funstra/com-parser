import { describe, expect, it } from "vitest";
import { parseModuleString } from "../../src/parser/module";
import { COMmoduleStruct } from "../../src/struct/module";


describe('COM-MODULE', () => {
    describe('valid', () => {

        const valid_module_string0 = 'lfo300:5'
        const valid_module_string1 = 'prob75'
        const valid_module_string2 = 'pth'
        const res0 = parseModuleString(valid_module_string0)
        const res1 = parseModuleString(valid_module_string1)
        const res2 = parseModuleString(valid_module_string2)
        it('', () => {
            expect(res0).toHaveProperty('name')
            expect(res0).toHaveProperty('params')
            expect(res1).toHaveProperty('name')
            expect(res1).toHaveProperty('params')
        })
        it('', () => {
            expect(res0.name).toBeTypeOf('string')
            expect(res1.name).toBeTypeOf('string')
        })
        it('', () => {
            expect(res0).
                toMatchObject<COMmoduleStruct>({
                    name: 'lfo',
                    params: [
                        {
                            name: 'frequency',
                            value: 300
                        },
                        {
                            name: 'amplitude',
                            value: 5
                        }
                    ]
                })
            expect(res1).
                toMatchObject<COMmoduleStruct>({
                    name: 'prob',
                    params: [
                        {
                            name: 'chance',
                            value: 75
                        }
                    ]
                })
            expect(res2).
                toMatchObject<COMmoduleStruct>({
                    name: 'pth',
                    params: []
                })
        })
    })
    describe.todo('invalid', () => {
        const invalid_module_string0 = 'lfo300:5'
        const invalid_module_string1 = 'prob8'
        const res0 = parseModuleString(invalid_module_string0)
        const res1 = parseModuleString(invalid_module_string1)
    })
})