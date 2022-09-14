export const add = <T extends Array<Object>>(arr: T) => (struct: T[0]) => [...arr, struct]
export const rem = <T extends Array<Object>>(arr) => (i: number) => arr.filter((el, index) => el.index ? el.index !== i : index !== i)
