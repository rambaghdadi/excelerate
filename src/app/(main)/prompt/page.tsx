"use client"
import FormContainer from "@/components/promptPage/molecules/FormContainer/FormContainer"
import PromptResultContext from "@/context/prompt-result-context"
import {IPromptArgs, ProjectScope} from "@/utils/types"
import {useRouter} from "next/navigation"
import {useContext} from "react"

export default function App() {
  const ctx = useContext(PromptResultContext)
  const router = useRouter()

  async function getResults(
    formData: Omit<IPromptArgs, "currency" | "employees">
  ) {
    try {
      ctx.setIsLoading(true)
      router.push("/prompt/result")
      const response = await fetch(`/api/prompt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
        }),
      })
      if (!response.ok)
        throw new Error("Something has happened. Please try again later.")
      const data = await response.json()
      const projectScope = JSON.parse(data.data) as ProjectScope
      ctx.setData(projectScope)
      console.log(data.data)
    } catch (error) {
      const err = error as Error
      ctx.setError(err.message)
    } finally {
      ctx.setIsLoading(false)
    }
  }

  return <FormContainer disabled={ctx.isLoading} getResults={getResults} />
}
