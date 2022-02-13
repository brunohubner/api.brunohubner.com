import { app } from "./app"
import { env } from "./config/env"

const port = env.PORT

app.listen(port, () =>
    // eslint-disable-next-line no-console
    console.log("\x1b[32m%s\x1b[0m", "Server listening at " + env.BACKEND_URL)
)
