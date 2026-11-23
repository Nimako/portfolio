import './globals.css'
export const metadata = {
  title: 'Isaac Gyasi Nimako | Senior Backend Engineer Portfolio',
  description: 'Isaac Gyasi Nimako - Senior Backend Engineer | 10+ years experience in enterprise SaaS, FinTech APIs, and agentic AI systems',
  keywords: 'backend engineer, software engineer, C#, ASP.NET Core, microservices, AI, SaaS, FinTech, Isaac Gyasi Nimako',
  author: 'Isaac Gyasi Nimako',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>

          {children}

      </body>
    </html>
  )
}

