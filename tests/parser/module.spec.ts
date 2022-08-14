import { describe, it, expect } from "vitest";
import module from '../../src/parser/module'


describe('parsing a module', () => {
    it('empty string => false', () => {
        const module_object: COMmodule | false = module('')
        expect(module_object).toBeFalsy()
    })
    it('type without parameters => COMmodule, empty parameters', () => {
        const module_object: COMmodule | false = module('pth')
        const match_object: COMmodule = {
            type: 'pth',
            parameters: []
        }
        expect(module_object).toMatchObject(match_object)
    })
    it('type and parameters => COMmodule, with parameter', () => {

        const module_object: COMmodule | false = module('lfo100:5')
        const match_object: COMmodule = {
            type: 'lfo',
            parameters: [
                {
                    name: 'frequency',
                    value: 100
                },
                {
                    name: 'amplitude',
                    value: 5
                }
            ]
        }
        expect(module_object).toMatchObject(match_object)
    })
})
