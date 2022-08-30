export function createHTMLEmailMessage(data: string): string {
  return `
    <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="x-apple-disable-message-reformatting" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="color-scheme" content="light dark" />
            <meta name="supported-color-schemes" content="light dark" />
            <title></title>
        </head>
        <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500"
            rel="stylesheet"
        />
        <body style="margin: 0; font-family: 'Roboto', sans-serif;">
            <div style="background: #f5f5f5; padding: 4vw; margin: 0;">
                <div style="border-radius: 3px;">
                    <div style="padding: 56px 48px 72px 48px;">
                        ${data}
                    </div>
                </div>
            </div>
        </body>
    </html>
    `;
}
