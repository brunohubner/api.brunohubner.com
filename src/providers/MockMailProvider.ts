import { MailProvider } from "../interfaces/MailProvider"

export class MockMailProvider implements MailProvider {
    async sendMail(): Promise<void> {}
}
