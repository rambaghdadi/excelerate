import UserProfile from "./UserProfile/UserProfile"
import classes from "./TeamComposition.module.css"
import Section from "../../atoms/Section/Section"
import Spacer from "@/components/general/molecules/Spacer/Spacer"

export default function TeamComposition() {
  return (
    <Section title={"Team Composition"}>
      <Spacer gap={1.5}>
        <UserProfile number={1} role="Frontend Engineer" />
        <UserProfile role="Backend Engineer" />
        <UserProfile number={2} role="Designer Engineer" />
        <UserProfile number={1} role="Product Manager" />
        <UserProfile role="Tech Lead" />
      </Spacer>
    </Section>
  )
}
