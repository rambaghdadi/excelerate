import {Poppins} from "next/font/google"

export const poppins = Poppins({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--main-font",
  fallback: ["serif"],
})
