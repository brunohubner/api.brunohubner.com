export function createHTMLEmailMessage(data: string): string {
    return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>
        <style>
            * {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
                font-family: Arial, Helvetica, sans-serif;
            }
            html,
            body {
                width: 100%;
                height: 100%;
                background-color: #222;
            }
            #message-content {
                max-width: 40rem;
                height: 100%;
                color: #eee;
                font-size: 1.25rem;
                line-height: 2rem;
                padding: 1.5rem;
            }
        </style>
        <div id="message-content">
            ${data}
        </div>
    </body>
    </html>
    `
}
