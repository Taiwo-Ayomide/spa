import type { Metadata } from 'next'
import './globals.css'
import { AOSInit } from './aos'
import { ourFileRouter } from './api/uploadthing/core'
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

// const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'SEXUAL PURITY ACADEMY',
  description: 'Sexual Purity Academy Application',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body >
        <NextSSRPlugin
          routerConfig = {extractRouterConfig(ourFileRouter)}
        />
        {children}
        {/* <Toaster /> */}
      </body>
    </html>
  )
}