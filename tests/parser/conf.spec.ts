import { describe, it, expect } from "vitest";
// import conf from "../../src/parser/conf";


describe.todo('', () => {
    it('empty string => false', () => {
        const conf_object = conf('')
        expect(conf_object).toBe(false)
    })
})