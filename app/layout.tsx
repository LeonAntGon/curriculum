import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Business Analyst Intern | Portfolio',
  description: 'Portfolio showcasing qualifications and projects for a Business Analyst Intern position.',
  keywords: 'business analyst, data analysis, automation, portfolio, intern, Sovos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}