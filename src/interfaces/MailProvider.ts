/* eslint-disable no-unused-vars */
import { SendMailData } from './SendMailData';

export interface MailProvider {
  sendMail(data: SendMailData): Promise<void>;
}
