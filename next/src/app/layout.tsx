export const metadata = {
  title: 'Curso Next.js',
  description: 'Aprendendo Next.js',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <title>Curso Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  )
}