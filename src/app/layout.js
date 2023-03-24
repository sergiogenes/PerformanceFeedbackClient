import './globals.css'

export const metadata = {
  title: 'GlobalNews Group',
  description: 'Devolución de Performance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
