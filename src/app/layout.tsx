import { Providers } from "./providers";
import type { ReactNode } from "react";
 import"@/styles/globals.css"

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    async
                    src="/seline.js"
                    data-token="24cc7b65ecf3469"
                />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Findiesaas7318back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
            <body className="flex min-h-svh flex-col antialiased">
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
