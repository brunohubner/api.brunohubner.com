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
                to: {
                    name: "Bruno Hubner",
                    email: env.privateEmail
                },
                from: {
                    name: "brunohubner.com",
                    email: env.publicEmail
                },
                subject: "Nova mensagem",
                data: message
            })
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}
