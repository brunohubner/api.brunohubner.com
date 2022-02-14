/* eslint-disable no-unused-vars */
import { MailProvider } from "../interfaces/MailProvider"
import { env } from "../config/env"
import { AppError } from "../errors/AppError"
import { inject, injectable } from "tsyringe"
import { getMailProvider } from "@/containers/getMailProvider"
import { getIpInfoProvider } from "@/containers/getIpInfoProvider"
import { IpInfoProvider } from "../interfaces/IpInfoProvider"
import { IpInfoData } from "@/interfaces/IpInfoData"

interface SendMessageServiceData {
    message: string
    ip: string
}

@injectable()
export class SendMessageService {
    constructor(
        @inject(getMailProvider())
        private readonly mailProvider: MailProvider,
        @inject(getIpInfoProvider())
        private readonly ipInfoProvider: IpInfoProvider
    ) {}

    async execute({ message, ip }: SendMessageServiceData): Promise<void> {
        if (!message.trim()) throw new AppError("Message is missing.")
        let ipInfo: IpInfoData = { address: "", internetProvider: "" }

        try {
            ipInfo = await this.ipInfoProvider.info(ip)
        } catch {
            //
        }

        const email = `
            <p>${message}</p>
            <br/><br/><br/>
            <p>${ipInfo.address}</p>
            <p>Provider: ${ipInfo.internetProvider}</p>
            <p>IP: ${ip}</p>
        `

        try {
            await this.mailProvider.sendMail({
                from: {
                    name: "brunohubner.com",
                    email: env.PUBLIC_EMAIL
                },
                to: {
                    name: "Bruno Hubner",
                    email: env.PRIVATE_EMAIL
                },
                subject: "Nova mensagem",
                data: email
            })
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}
