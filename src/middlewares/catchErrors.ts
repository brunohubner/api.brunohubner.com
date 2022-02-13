import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError"
import { logError } from "../errors/logError"
import { logErrorConditional } from "../errors/logErrorHere"

export function catchErrors(
    error: Error,
    req: Request,
    res: Response,
    _next: NextFunction
): Response {
    logErrorConditional(error)

    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            statusCode: error.statusCode,
            message: error.message
        })
    }

    if (AppError.errorList.includes(error.message)) {
        return res.status(400).json({
            statusCode: 400,
            message: error.message
        })
    }

    logError(error)
    return res.status(500).json({
        statusCode: 500,
        message: "Internal server error"
    })
}
