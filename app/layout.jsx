import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Coursika - Learn Skills, Build Future',
    template: '%s | Coursika'
  },
  description: 'Master new skills with expert-led courses on Coursika. Join thousands of learners and advance your career with our comprehensive online learning platform.',
  keywords: 'online courses, skill development, learning platform, education, career growth',
  authors: [{ name: 'Coursika Team' }],
  creator: 'Coursika',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://coursika.com',
    title: 'Coursika - Learn Skills, Build Future',
    description: 'Master new skills with expert-led courses on Coursika.',
    siteName: 'Coursika',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coursika - Learn Skills, Build Future',
    description: 'Master new skills with expert-led courses on Coursika.',
    creator: '@coursika',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}