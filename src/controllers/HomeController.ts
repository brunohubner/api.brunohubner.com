import { Request, Response } from 'express';

export class HomeController {
  async handle(req: Request, res: Response): Promise<Response> {
    return res.json({ statusCode: 200, message: 'Server is live' });
  }
}
