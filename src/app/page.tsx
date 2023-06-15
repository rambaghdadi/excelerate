"use client"
import FormContainer from "@/components/molecules/FormContainer/FormContainer"
import {IPromptArgs, ProjectScope} from "@/utils/types"
import {useState} from "react"

export default function Home() {
  const [results, setResults] = useState<ProjectScope | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  async function getResults(
    formData: Omit<IPromptArgs, "currency" | "employees">
  ) {
    try {
      setIsLoading(true)
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
      setResults(projectScope)
      console.log(projectScope)
    } catch (error) {
      const err = error as Error
      setError(err.message)
    }
  }

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <FormContainer disabled={isLoading} getResults={getResults} />
    </>
  )
}
