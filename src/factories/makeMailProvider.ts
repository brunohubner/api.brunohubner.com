import { MailProvider } from "../interfaces/MailProvider"
import { EtherealMailProvider } from "../providers/EtherealMailProvider"

export function makeMailProvider(): MailProvider {
    return new EtherealMailProvider()
}
