import { Router } from 'express';
import { makeMessageController } from '../factories/makeMessageController';
import { makeHomeController } from '../factories/makeHomeController';

const routes = Router();

routes.post('/message', makeMessageController().handle);
routes.get('/', makeHomeController().handle);

export { routes };
