import TextArea from "@/components/atoms/TextArea/TextArea"
import FormQuestion from "@/components/molecules/FormQuestion/FormQuestion"
import {styled} from "styled-components"

const StyledFormStepTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & > .step {
    margin-top: 1rem;
    margin-bottom: 1.5;
    font-size: 0.9rem;
    font-weight: 500;
  }
`

interface IFormStepTwoProps {
  primaryDeliverableValue: string
  briefValue: string
  primaryDeliverableOnChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  briefOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function FormStepTwo({
  primaryDeliverableValue,
  briefValue,
  primaryDeliverableOnChange,
  briefOnChange,
}: IFormStepTwoProps) {
  return (
    <StyledFormStepTwo>
      <FormQuestion label="What is the primary deliverable of this project?">
        <TextArea
          value={primaryDeliverableValue}
          onChange={primaryDeliverableOnChange}
        />
      </FormQuestion>
      <FormQuestion label="What is the project's brief?">
        <TextArea value={briefValue} onChange={briefOnChange} />
      </FormQuestion>
    </StyledFormStepTwo>
  )
}
