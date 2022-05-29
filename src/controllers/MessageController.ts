import { Request, Response } from "express"
import { container } from "tsyringe"
import { SendMessageService } from "../services/SendMessageService"

export class MessageController {
    async handle(req: Request, res: Response): Promise<Response> {
        const message = req.body.message || ""
        const address = req.body.address || ""
        const ip = req.body.ip || ""
        const sendMessageService = container.resolve(SendMessageService)
        await sendMessageService.execute({ message, address, ip })
        return res.status(204).end()
    }
}
