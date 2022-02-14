/* eslint-disable @typescript-eslint/no-var-requires */
const { getIPInfo } = require("ip-info-finder")
import { IpInfoData } from "../interfaces/IpInfoData"
import { IpInfoProvider } from "../interfaces/IpInfoProvider"

type IpInfoFinderResponse = {
    asname?: string
    city?: string
    country?: string
    regionName?: string
    location?: {
        address?: {
            road?: string
            city_district?: string
            village?: string
            house_number?: string
        }
    }[]
}

export class IpInfoFinderProvider implements IpInfoProvider {
    async info(ip: string): Promise<IpInfoData> {
        let road = ""
        let number = ""
        let district = ""
        let city = ""
        let regionName = ""
        let country = ""
        let internetProvider = ""

        const data = (await getIPInfo.location(ip)) as IpInfoFinderResponse

        if (data) {
            city = data.city || ""
            regionName = data.regionName || ""
            country = data.country || ""
            internetProvider = data.asname || ""
        }

        if (data.location?.length) {
            road = data.location[0].address?.road || ""
            number = data.location[0].address?.house_number || ""
            district =
                data.location[0].address?.city_district ||
                data.location[0].address?.village ||
                ""
        }

        const address = `${road ? road + ", " : ""}${
            number ? "n" + number + ", " : ""
        }${district ? district + ", " : ""}${city ? city + ", " : ""}${
            regionName ? regionName + ", " : ""
        }${country ? country + "." : "."}`

        return { address, internetProvider }
    }
}
