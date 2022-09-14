import { describe, it, expect } from 'vitest'
import { COMmoduleStruct } from '../../src/parser/module'
import { writeModuleString } from '../../src/wtriter/module'

describe('COM-MODULE', () => {
    const valid_module_struct: COMmoduleStruct = {
        name: 'lfo',
        params: [
            { name: 'frequency', value: 300 },
            { name: 'amplitude', value: 50 },
        ]
    }
    const res0 = writeModuleString(valid_module_struct)
    it('', () => {
        expect(res0).toBe('lfo300:50')
    })
})