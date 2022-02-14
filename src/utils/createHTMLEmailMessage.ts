export function createHTMLEmailMessage(data: string): string {
    return `
        <style>
            .message-content { font-family: Arial, Helvetica, sans-serif; max-width:
            600px; font-size: 18px; line-height: 24px; }
        </style>

        <div class="message-content">
            ${data}
        </div>
    `
}
