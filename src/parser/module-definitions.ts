import { moduleTypes, COMmodule } from "../types/com-parser"
// TODO write set function for parameters

export const module_map: Map<moduleTypes, COMmodule> = new Map()

module_map.set('lfo', {
    type: 'lfo',
    parameters: [
        {
            name: 'frequency',
            value: 20
        },
        {
            name: 'amplitude',
            value: 1
        }
    ]
})
module_map.set('prob', {
    type: 'prob',
    parameters: [
        {
            name: 'chance',
            value: 50
        }
    ]
})
module_map.set('pth', {
    type: 'pth',
    parameters: []
})


// TODO write a type functio that returns propper module implementation shape,
// eg. get('lfo') => type {name:'lfo',parameters:[{name:'freq',value:null}]}

// export const get_module = <K extends module_types>(type: K): __module_map[K] => {
//     return module_map.get(type)
// }







