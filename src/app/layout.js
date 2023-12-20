import './globals.css'

export const metadata = {
  title: 'CodeCapture',
  description: 'Generate images of code snippets',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
