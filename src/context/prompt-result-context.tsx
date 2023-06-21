"use client"
import {ProjectScope} from "@/utils/types"
import {createContext, useState} from "react"

type ContextType = {
  data: ProjectScope | null
  setData: (value: ProjectScope | null) => void
  isLoading: boolean
  setIsLoading: (e: any) => void
  error: string
  setError: (e: any) => void
}

const PromptResultContext = createContext<ContextType>({
  data: null,
  setData: (e: ProjectScope | null) => {},
  error: "",
  isLoading: false,
  setIsLoading: (e: any) => {},
  setError: (e: any) => {},
})

export function PromptContextProvider({children}: {children: React.ReactNode}) {
  const [data, setData] = useState<ProjectScope | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  return (
    <PromptResultContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </PromptResultContext.Provider>
  )
}

export default PromptResultContext
