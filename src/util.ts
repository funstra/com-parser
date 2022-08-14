export const slice2 = (s: string): string => s.slice(2)
export const slice = (n: number) => (s: string): string => s.slice(n)
export const splitColon = (s: string): string[] => s.split(':')
export const splitComma = (s: string): string[] => s.split(',')
export const int = (s: string): number => parseInt(s)
export const splitColonInt = (s: string): number[] => splitColon(s).map(int)
export const isNAN = (n: number) => isNaN(n)




