import classes from "./FormSteps.module.css"
import TextArea from "@/components/general/atoms/TextArea/TextArea"
import FormQuestion from "@/components/general/molecules/FormQuestion/FormQuestion"

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
    <div className={classes.container}>
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
    </div>
  )
}
