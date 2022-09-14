import { COMmoduleStruct } from "../parser/module";

export const writeModuleString = (struct: COMmoduleStruct): string => {
    return `${struct.name}${struct.params.map(p => p.value).join(':')}`
}