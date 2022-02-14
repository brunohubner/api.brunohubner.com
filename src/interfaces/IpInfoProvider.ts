import { IpInfoData } from "./IpInfoData"

export interface IpInfoProvider {
    info(ip: string): Promise<IpInfoData>
}
