import { env } from '../config/env';

const mailProvider =
  env.NODE_ENV === 'test'
    ? 'MockMailProvider'
    : env.MAIL_PROVIDER === 'sendgrid'
    ? 'SendGridMailProvider'
    : 'EtherealMailProvider';

export function getMailProvider(): string {
  return mailProvider;
}
