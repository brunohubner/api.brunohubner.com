import { IpInfoData } from "../interfaces/IpInfoData"
import { IpInfoProvider } from "../interfaces/IpInfoProvider"

export class MockIpInfoProvider implements IpInfoProvider {
    async info(): Promise<IpInfoData> {
        return { address: "", internetProvider: "" }
    }
}
