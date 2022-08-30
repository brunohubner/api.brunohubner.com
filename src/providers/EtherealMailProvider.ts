import { MailProvider } from '../interfaces/MailProvider';
import { SendMailData } from '../interfaces/SendMailData';
import { createHTMLEmailMessage } from '../utils/createHTMLEmailMessage';
import nodemailer from 'nodemailer';

export class EtherealMailProvider implements MailProvider {
  async sendMail({ data, from, subject, to }: SendMailData): Promise<void> {
    const account = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass
      }
    });

    const html = createHTMLEmailMessage(data);

    const message = await transporter.sendMail({
      from: {
        name: from.name,
        address: from.email
      },
      to: {
        name: to.name,
        address: to.email
      },
      subject,
      html
    });

    // eslint-disable-next-line no-console
    console.log('Nodemailer URL: %s', nodemailer.getTestMessageUrl(message));
  }
}
