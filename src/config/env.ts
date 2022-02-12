export const env = {
    port: process.env.PORT || 3333,
    backendUrl: process.env.BACKEND_URL || "http://localhost:3333",
    privateEmail: process.env.PRIVATE_EMAIL || "",
    publicEmail: process.env.PUBLIC_EMAIL || "",
    sendGridApiKey: process.env.SENDGRID_API_KEY || "",
    mailProvider: process.env.MAIL_PROVIDER || "ethereal"
}
