/* eslint-disable no-unused-vars */
import { MailProvider } from "../interfaces/MailProvider"
import { env } from "../config/env"
import { AppError } from "../errors/AppError"
import { inject, injectable } from "tsyringe"
import { getMailProvider } from "@/containers/getMailProvider"

interface SendMessageServiceData {
    message: string
    ip: string
}

@injectable()
export class SendMessageService {
    constructor(
        @inject(getMailProvider())
        private readonly mailProvider: MailProvider
    ) {}

    async execute({ message }: SendMessageServiceData): Promise<void> {
        if (!message.trim()) throw new AppError("Message is missing.")
        const email = `<p>${message}</p>`

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
