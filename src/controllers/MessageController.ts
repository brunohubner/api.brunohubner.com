import { Request, Response } from "express"
import { container } from "tsyringe"
import { SendMessageService } from "../services/SendMessageService"

export class MessageController {
    async handle(req: Request, res: Response): Promise<Response> {
        const data = req.body.data
        const sendMessageService = container.resolve(SendMessageService)
        await sendMessageService.execute(data)
        return res.status(204).end()
    }
}
