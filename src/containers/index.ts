import { IpInfoProvider } from "@/interfaces/IpInfoProvider"
import { IpInfoFinderProvider } from "@/providers/IpInfoFinderProvider"
import { container } from "tsyringe"
import { MailProvider } from "../interfaces/MailProvider"
import { EtherealMailProvider } from "../providers/EtherealMailProvider"
import { SendGridMailProvider } from "../providers/SendGridMailProvider"

container.registerSingleton<MailProvider>(
    "EtherealMailProvider",
    EtherealMailProvider
)

container.registerSingleton<MailProvider>(
    "SendGridMailProvider",
    SendGridMailProvider
)

container.registerSingleton<IpInfoProvider>(
    "IpInfoFinderProvider",
    IpInfoFinderProvider
)
