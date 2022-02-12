import { app } from "@/app"
import request from "supertest"

describe("Message route", () => {
    it("should send a new message", async () => {
        const body = {
            message: "some message"
        }

        request(app).post("/message").send(body).expect(204)
    })
})
