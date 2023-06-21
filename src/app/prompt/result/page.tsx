"use client"
import PromptResultContext from "@/context/prompt-result-context"
import {useContext} from "react"

export default function PromptResult() {
  const ctx = useContext(PromptResultContext)

  if (ctx.isLoading) return <p>Loading...</p>

  if (ctx.error) return <p>Something went wrong. Please try again later.</p>

  return <>{ctx.data?.projectPlan}</>
}
