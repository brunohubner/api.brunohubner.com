import { env } from "../config/env"

const mailProvider =
    env.mailProvider === "sendgrid"
        ? "SendGridMailProvider"
        : "EtherealMailProvider"

export function getMailProvider(): string {
    return mailProvider
}
