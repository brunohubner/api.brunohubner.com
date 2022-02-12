/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
let showError = false

export function logErrorConditional(...args: any): void {
    showError === true ? console.log(...args) : false
    showError = false
}

export function logErrorHere(): void {
    showError = true
}
