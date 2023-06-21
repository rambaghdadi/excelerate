import "../styles/globals.css"
import StyledComponentsRegistry from "@/lib/styledRegistry"
import Header from "@/components/general/molecules/Header/Header"
import {urbanist} from "@/fonts/fonts"
import Footer from "@/components/general/molecules/Footer/Footer"
import {PromptContextProvider} from "@/context/prompt-result-context"

export const metadata = {
  title: "Excelerate",
  description: "Accelerate your growth with AI",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={urbanist.variable}>
        <StyledComponentsRegistry>
          <PromptContextProvider>
            <Header />
            {children}
            <Footer />
          </PromptContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
