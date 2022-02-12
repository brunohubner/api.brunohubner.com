import { MessageController } from "../controllers/MessageController"

export function makeMessageController(): MessageController {
    return new MessageController()
}
