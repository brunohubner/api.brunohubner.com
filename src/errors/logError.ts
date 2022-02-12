/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
const logError =
    process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test"
        ? () => {}
        : (...args: any) => console.error(...args)

export { logError }
