import "reflect-metadata"
import "express-async-errors"
import "@/containers"
import express from "express"
import cors from "cors"
import { routes } from "./routes"
import { errorMiddleware } from "@/middlewares/errorMiddleware"
import { rateLimiter } from "@/middlewares/rateLimiter"

const app = express()

app.use(cors({ origin: "*" }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(rateLimiter)
app.use(routes)
app.use(errorMiddleware)

export { app }
