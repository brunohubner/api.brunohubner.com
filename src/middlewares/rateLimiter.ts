import { Request } from "express"
import { AppError } from "../errors/AppError"
import { env } from "../config/env"
import rateLimit from "express-rate-limit"

// 5 requests per second per ip
export const rateLimiter = rateLimit({
    windowMs: 1000 * 1, // 1 sec
    max: env.NODE_ENV === "production" ? 5 : 9999, // 5 requests
    keyGenerator: (req: Request): string => req.ip,
    handler: (): void => {
        throw new AppError("Too many requests.", 429)
    }
})
