import { Request, Response } from "express"
import { container } from "tsyringe"
import { SendMessageService } from "../services/SendMessageService"

export class MessageController {
    async handle(req: Request, res: Response): Promise<Response> {
        const message = req.body.message || ""
        const sendMessageService = container.resolve(SendMessageService)

        await sendMessageService.execute(message)
        return res.status(204).end()
    }
}
