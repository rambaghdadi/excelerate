import "../../styles/globals.css"
import "../../styles/main.css"
import Header from "@/components/general/molecules/Header/Header"
import {urbanist} from "@/fonts/fonts"
import Footer from "@/components/general/molecules/Footer/Footer"
import {PromptContextProvider} from "@/context/prompt-result-context"
import type {Metadata} from "next"

export const metadata: Metadata = {
  title: "Excelerate",
  description: "Accelerate your growth with AI",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={urbanist.variable}>
        <PromptContextProvider>
          <Header />
          {children}
          <Footer />
        </PromptContextProvider>
      </body>
    </html>
  )
}
