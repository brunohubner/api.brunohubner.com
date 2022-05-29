/* eslint-disable no-unused-vars */
import { MailProvider } from "../interfaces/MailProvider"
import { env } from "../config/env"
import { AppError } from "../errors/AppError"
import { inject, injectable } from "tsyringe"
import { getMailProvider } from "@/containers/getMailProvider"

interface SendMessageServiceData {
    message: string
    address: string
    ip: string
}

@injectable()
export class SendMessageService {
    constructor(
        @inject(getMailProvider())
        private readonly mailProvider: MailProvider
    ) {}

    async execute(data: SendMessageServiceData): Promise<void> {
        for (const [key, value] of Object.entries(data)) {
            if (!value.trim()) {
                throw new AppError(`Attribute ${key} is missing.`)
            }
        }

        const email = `
            <p>${data.message}</p>
            <br/><br/><br/><br/><br/><br/><br/>
            <p>${data.address}</p>
            <p>IP: ${data.ip}</p>
        `

        try {
            await this.mailProvider.sendMail({
                from: {
                    name: "brunohubner.com",
                    email: env.SENDGRID_EMAIL_FROM
                },
                to: {
                    name: "Bruno Hubner",
                    email: env.SENDGRID_EMAIL_TO
                },
                subject: "Nova mensagem",
                data: email
            })
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}
