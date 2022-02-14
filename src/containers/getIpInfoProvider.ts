import { env } from "../config/env"

const ipInfoProvider =
    env.NODE_ENV === "test"
        ? "MockIpInfoProvider"
        : env.IP_INFO_PROVIDER === "ip-info-finder"
        ? "IpInfoFinderProvider"
        : "MockIpInfoProvider"

export function getIpInfoProvider(): string {
    return ipInfoProvider
}
