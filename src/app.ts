import "dotenv/config"
import "reflect-metadata"
import "express-async-errors"
import "@/containers"
import express from "express"
import cors from "cors"
import { routes } from "./routes"
import { errorMiddleware } from "@/middlewares/errorMiddleware"

const app = express()

app.use(
    cors({
        origin: "*"
    })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(errorMiddleware)

export { app }
