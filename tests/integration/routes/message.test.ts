import { app } from "@/app"
import request from "supertest"

describe("Message route", () => {
    it("should return 204 on send message", async () => {
        const body = { message: "some message" }
        request(app).post("/message").send(body).expect(204)
    })

    it("should return 400 on send message", async () => {
        const body = { message: "" }
        request(app).post("/message").send(body).expect(400)
    })
})
