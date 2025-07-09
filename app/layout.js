import { AuthProvider } from './auth-context';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}


export const metadata = {
  title: {
    default: 'Zentrova | Powerful Solution for logo design',
    template: '%s | Your Brand Name'
  },
  description: 'Default site description',
  metadataBase: new URL('https://yourdomain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/og-image.jpg',
  }
}