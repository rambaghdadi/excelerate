import "../../styles/globals.css"
import "../../styles/marketing.css"
import {urbanist} from "@/fonts/fonts"
import type {Metadata} from "next"

export const metadata: Metadata = {
  title: "Coming Soon - Excelerate",
  description: "Accelerate your growth with AI",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={urbanist.variable}>{children}</body>
    </html>
  )
}
