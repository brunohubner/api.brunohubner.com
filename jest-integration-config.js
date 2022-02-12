const { resolve } = require("path")
const root = resolve(__dirname)
const rootConfigPath = resolve(root, "jest.config.js")
const config = require(rootConfigPath)

config.testMatch = ["<rootDir>/tests/integration/**/*"]

module.exports = config
