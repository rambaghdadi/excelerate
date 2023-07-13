"use client"
import Spacer from "@/components/general/molecules/Spacer/Spacer"
import BudgetBreakdown from "@/components/promptResultPage/molecules/BudgetBreakdown/BudgetBreakdown"
import TeamComposition from "@/components/promptResultPage/molecules/TeamComposition/TeamComposition"
import Tooling from "@/components/promptResultPage/molecules/Tooling/Tooling"
import Grid from "@/components/promptResultPage/organisms/Grid"
import PromptResultContext from "@/context/prompt-result-context"
import {useContext} from "react"

export default function PromptResult() {
  const ctx = useContext(PromptResultContext)

  if (ctx.isLoading) return <p>Loading...</p>

  if (ctx.error) return <p>Something went wrong. Please try again later.</p>

  return (
    <Grid>
      <TeamComposition />
      <BudgetBreakdown />
      <Spacer isFullWidth>
        <Tooling />
        <div style={{width: "100%"}}></div>
      </Spacer>
    </Grid>
  )
}
