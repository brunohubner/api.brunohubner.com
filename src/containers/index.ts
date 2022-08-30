import { container } from 'tsyringe';
import { MailProvider } from '../interfaces/MailProvider';
import { EtherealMailProvider } from '../providers/EtherealMailProvider';
import { SendGridMailProvider } from '../providers/SendGridMailProvider';
import { MockMailProvider } from '../providers/MockMailProvider';

container.registerSingleton<MailProvider>('MockMailProvider', MockMailProvider);

container.registerSingleton<MailProvider>(
  'EtherealMailProvider',
  EtherealMailProvider
);

container.registerSingleton<MailProvider>(
  'SendGridMailProvider',
  SendGridMailProvider
);
