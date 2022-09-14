import { COMnetworkStruct } from "../parser/conf";
import { writeChainString } from "./chain";
import { writeOutString } from "./out";

export const writeNetworkString = (struct: COMnetworkStruct): string => {
    return `${struct.chains.map(writeChainString).join(';')}`
}