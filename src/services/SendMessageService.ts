/* eslint-disable no-unused-vars */
import { MailProvider } from "../interfaces/MailProvider"
import { env } from "../config/env"
import { AppError } from "../errors/AppError"
import { inject, injectable } from "tsyringe"
import { getMailProvider } from "@/containers/getMailProvider"

@injectable()
export class SendMessageService {
    constructor(
        @inject(getMailProvider())
        private readonly mailProvider: MailProvider
    ) {}

    async execute(message: string): Promise<void> {
        if (!message.trim()) throw new AppError("Message is missing.")

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
                data: message
            })
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}
