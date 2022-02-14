import "dotenv/config"

export const env = {
    PORT: process.env.PORT || 3333,
    BACKEND_URL: process.env.BACKEND_URL || "http://localhost:3333",
    PRIVATE_EMAIL: process.env.PRIVATE_EMAIL || "",
    PUBLIC_EMAIL: process.env.PUBLIC_EMAIL || "",
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || "",
    MAIL_PROVIDER: process.env.MAIL_PROVIDER || "ethereal",
    NODE_ENV: process.env.NODE_ENV || "development",
    IP_INFO_PROVIDER: process.env.IP_INFO_PROVIDER || "mock"
}
