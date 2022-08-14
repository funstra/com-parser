import { module_map } from '../module-definitions'
import { splitColon, int } from '../util'

/**
 * Parses an module string and returns an {@link COMmodule}
 * @param s module string
 */
export default (s: string): COMmodule => {
    if (!s) return false
    const [type, parametersString] = s.split(/([a-z]+)/).slice(1) as [module_types, string]
    const moduleOfType = module_map.get(type)
    if (moduleOfType) {
        const parameters = splitColon(parametersString).map(int)

        moduleOfType.parameters = moduleOfType.parameters.map((parameter, i) => {
            return {
                name: parameter.name,
                value: parameters[i]
            }
        })

        return moduleOfType
    }
    return false
}