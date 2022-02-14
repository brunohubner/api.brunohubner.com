import { env } from "../config/env"

const ipInfoProvider =
    env.IP_INFO_PROVIDER === "ip-info-finder" && env.NODE_ENV !== "test"
        ? "IpInfoFinderProvider"
        : "MockIpInfoProvider"

export function getIpInfoProvider(): string {
    return ipInfoProvider
}
