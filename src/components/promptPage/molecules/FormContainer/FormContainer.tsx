import Button from "@/components/general/atoms/Button/Button"
import FormStepOne from "@/components/promptPage/organisms/FormStepOne/FormStepOne"
import FormStepTwo from "@/components/promptPage/organisms/FormStepTwo/FormStepTwo"
import type {IPromptArgs} from "@/utils/types"
import {FormEvent, useState} from "react"
import {
  StyledErrorMessage,
  StyledFormActions,
  StyledFormContainer,
  StyledStepInfo,
} from "./FormContainer.styles"
import {validateForm} from "@/utils/promptFormValidation"

interface IFormContainerProps {
  getResults: (data: Omit<IPromptArgs, "employees">) => void
  disabled: boolean
}

export default function FormContainer({
  getResults,
  disabled,
}: IFormContainerProps) {
  const [step, setStep] = useState(0)
  const [formError, setFormError] = useState("")
  //Form 1
  const [stepOneForm, setStepOneForm] = useState({
    budgetValue: 100000,
    currencyValue: "USD",
    industryValue: "Food & Beverages",
    sectorValue: "Consumer Discretionary",
    startDateValue: new Date().toISOString().split("T")[0],
    endDateValue: new Date().toISOString().split("T")[0],
  })
  //Form 2
  const [stepTwoForm, setStepTwoForm] = useState({
    primaryDeliverableValue: "increase customers and sales",
    briefValue: "introduce sustainable packaging material for walkers crisps",
  })

  function updateForm(e: any, prev: any) {
    setFormError("")
    return {
      ...prev,
      [e.target.name]: e.target.value,
    }
  }

  const formSteps = [
    {
      form: (
        <FormStepOne
          onChange={(e) => setStepOneForm((prev) => updateForm(e, prev))}
          {...stepOneForm}
        />
      ),
      heading: "Please let us know a bit about the project.",
    },
    {
      heading: "Please let us know a bit about the deliverables.",
      form: (
        <FormStepTwo
          onChange={(e) => setStepTwoForm((prev) => updateForm(e, prev))}
          {...stepTwoForm}
        />
      ),
    },
  ]

  function nextForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    try {
      validateForm(stepOneForm as any)
      if (step === formSteps.length - 1) return
      setStep((prev) => prev + 1)
    } catch (err) {
      const e = err as Error
      setFormError(e.message)
    }
  }

  function previousForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (step === 0) return
    setStep((prev) => prev - 1)
  }

  function submit(e: FormEvent) {
    e.preventDefault()
    getResults({
      industry: stepOneForm.industryValue,
      currency: stepOneForm.currencyValue,
      sector: stepOneForm.sectorValue,
      goal: stepTwoForm.primaryDeliverableValue,
      brief: stepTwoForm.briefValue,
      budget: stepOneForm.budgetValue,
      projectStartDate: stepOneForm.startDateValue,
      deadline: stepOneForm.endDateValue,
    })
  }

  return (
    <StyledFormContainer onSubmit={submit}>
      <p>Assessor</p>
      <StyledStepInfo>
        <span>Step {step + 1}: </span>
        {formSteps[step].heading}
      </StyledStepInfo>
      {formSteps[step].form}
      <StyledFormActions>
        {step > 0 && (
          <Button type="button" {...{disabled}} onClick={previousForm}>
            Previous
          </Button>
        )}
        {step === 1 ? (
          <Button {...{disabled}} type="submit">
            Submit
          </Button>
        ) : (
          <Button type="button" {...{disabled}} onClick={nextForm}>
            Next
          </Button>
        )}
      </StyledFormActions>
      {formError && <StyledErrorMessage>Error: {formError}</StyledErrorMessage>}
    </StyledFormContainer>
  )
}
