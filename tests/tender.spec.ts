import { describe, expect, it } from "vitest";
import { COMmoduleStruct } from "../src/parser/module";
import { add } from "../src/util/tender";

describe('TENDER-COM', () => {
    const valid_module_structs: COMmoduleStruct[] = [
        {
            name: 'lfo',
            params: [
                { name: 'freq', value: 100 },
                { name: 'amp', value: 2 },
            ]
        },
        {
            name: 'pth',
            params: []
        }
    ]
    const updated_module_structs = add(valid_module_structs)({
        name: 'lfo',
        params: [
            { name: 'freq', value: 55 },
            { name: 'amp', value: 20 }
        ]
    })
    it('', () => {
        expect(updated_module_structs).toStrictEqual<COMmoduleStruct[]>([
            {
                name: 'lfo',
                params: [
                    { name: 'freq', value: 100 },
                    { name: 'amp', value: 2 },
                ]
            },
            {
                name: 'pth',
                params: []
            },
            {
                name: 'lfo',
                params: [
                    { name: 'freq', value: 55 },
                    { name: 'amp', value: 20 }
                ]
            }
        ])
    })
})