export const elm = <K extends keyof HTMLElementTagNameMap>(s: K): HTMLElementTagNameMap[K] => document.createElement(s)
export const q = (t: HTMLElement) => (s: string): HTMLElement => t.querySelector(s)
