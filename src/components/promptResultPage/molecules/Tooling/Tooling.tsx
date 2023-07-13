import Spacer from "@/components/general/molecules/Spacer/Spacer"
import Section from "../../atoms/Section/Section"
import Tool from "./Tool/Tool"

export default function Tooling() {
  return (
    <Section title="Tooling">
      <Spacer gap={1} flexDirection="column">
        <Tool name="Slack" price="Free" numberOfUsers={13} />
        <Tool name="Slack" price="Free" numberOfUsers={13} />
        <Tool name="Slack" price="Free" numberOfUsers={13} />
        <Tool name="Slack" price="Free" numberOfUsers={13} />
        <Tool name="Slack" price="Free" numberOfUsers={13} />
      </Spacer>
    </Section>
  )
}
