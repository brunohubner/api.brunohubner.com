import { HomeController } from '../controllers/HomeController';

export function makeHomeController(): HomeController {
  return new HomeController();
}
