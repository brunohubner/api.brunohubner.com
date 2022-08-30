interface MailContact {
  name: string;
  email: string;
}

export interface SendMailData {
  from: MailContact;
  to: MailContact;
  subject: string;
  data: string;
}
