import { MailProvider } from "../interfaces/MailProvider"
import { SendMailData } from "../interfaces/SendMailData"
import { createHTMLEmailMessage } from "../utils/createHTMLEmailMessage"
import { env } from "../config/env"
import sgMail from "@sendgrid/mail"

export class SendGridMailProvider implements MailProvider {
    async sendMail({ data, from, subject, to }: SendMailData): Promise<void> {
        try {
            sgMail.setApiKey(env.sendGridApiKey)

            const message = {
                from: `${from.name} <${from.email}>`,
                to: to.email,
                subject,
                html: createHTMLEmailMessage(data)
            }

            await sgMail.send(message)
        } catch (error) {
            throw new Error("SendGrid error.")
        }
    }
}
