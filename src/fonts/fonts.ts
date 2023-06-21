import {Urbanist} from "next/font/google"

export const urbanist = Urbanist({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--main-font",
  fallback: ["serif"],
})
