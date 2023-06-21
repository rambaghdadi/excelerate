import TextArea from "@/components/general/atoms/TextArea/TextArea"
import FormQuestion from "@/components/general/molecules/FormQuestion/FormQuestion"
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
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function FormStepTwo({
  primaryDeliverableValue,
  briefValue,
  onChange,
}: IFormStepTwoProps) {
  return (
    <StyledFormStepTwo>
      <FormQuestion
        htmlFor="primaryDeliverableValue"
        label="What is the primary deliverable of this project?"
      >
        <TextArea
          id="primaryDeliverableValue"
          required
          name="primaryDeliverableValue"
          value={primaryDeliverableValue}
          onChange={onChange}
        />
      </FormQuestion>
      <FormQuestion htmlFor="briefValue" label="What is the project's brief?">
        <TextArea
          id="briefValue"
          required
          name="briefValue"
          value={briefValue}
          onChange={onChange}
        />
      </FormQuestion>
    </StyledFormStepTwo>
  )
}
