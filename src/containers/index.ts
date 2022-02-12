import { container } from "tsyringe"
import { MailProvider } from "../interfaces/MailProvider"
import { EtherealMailProvider } from "../providers/EtherealMailProvider"

container.registerSingleton<MailProvider>("MailProvider", EtherealMailProvider)
