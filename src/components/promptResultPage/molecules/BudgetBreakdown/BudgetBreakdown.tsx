import Table from "@/components/general/molecules/Table/Table"
import Section from "../../atoms/Section/Section"

export default function BudgetBreakdown() {
  const columns = ["Role", "Duration", "Date Rate", "Total Cost"]

  const rows = [
    {row: ["Engineer", "5 (days)", "£17.00", "£85"]},
    {row: ["Engineer", "5 (days)", "£17.00", "£85"]},
    {row: ["Engineer", "5 (days)", "£17.00", "£85"]},
    {row: ["Engineer", "5 (days)", "£17.00", "£85"]},
  ]

  return (
    <Section title="Budget Breakdown">
      <Table {...{columns, rows}} />
    </Section>
  )
}
