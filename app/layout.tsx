import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Growtopia | Official Website',
  description: 'Growtopia is a free-to-play sandbox MMO game with almost endless possibilities for world creation, customization and having fun with your friends.',
  icons: {
    icon: 'https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/images/growtopia.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}