import Button from "@/components/atoms/Button/Button"
import FormStepOne from "@/components/organisms/FormStepOne/FormStepOne"
import FormStepTwo from "@/components/organisms/FormStepTwo/FormStepTwo"
import {IPromptArgs} from "@/utils/types"
import {FormEvent, useState} from "react"
import {
  StyledFormActions,
  StyledFormContainer,
  StyledStepInfo,
} from "./FormContainer.styles"

interface IFormContainerProps {
  getResults: (data: Omit<IPromptArgs, "currency" | "employees">) => void
  disabled: boolean
}

export default function FormContainer({
  getResults,
  disabled,
}: IFormContainerProps) {
  const [step, setStep] = useState(0)
  //Form 1
  const [budgetValue, setBudgetValue] = useState(100000)
  const [currencyValue, setCurrencyValue] = useState("")
  const [endDateValue, setEndDateValue] = useState("")
  const [industryValue, setIndustryValue] = useState("")
  const [sectorValue, setSectorValue] = useState("")
  const [startDateValue, setStartDateValue] = useState("")
  //Form 2
  const [primaryDeliverableValue, setPrimaryDeliverableValue] = useState("")
  const [briefValue, setBriefValue] = useState("")

  const formSteps = [
    {
      form: (
        <FormStepOne
          industryOnChange={(e) => setIndustryValue(e.target.value)}
          currencyOnChange={(e) => setCurrencyValue(e.target.value)}
          budgetOnChange={(e) => setBudgetValue(e.target.valueAsNumber)}
          sectorOnChange={(e) => setSectorValue(e.target.value)}
          startDateOnChange={(e) => setStartDateValue(e.target.value)}
          endDateOnChange={(e) => setEndDateValue(e.target.value)}
          {...{
            budgetValue,
            currencyValue,
            endDateValue,
            industryValue,
            sectorValue,
            startDateValue,
          }}
        />
      ),
      heading: "Please let us know a bit about the project.",
    },
    {
      heading: "Please let us know a bit about the deliverables.",
      form: (
        <FormStepTwo
          {...{briefValue, primaryDeliverableValue}}
          briefOnChange={(e) => setBriefValue(e.target.value)}
          primaryDeliverableOnChange={(e) =>
            setPrimaryDeliverableValue(e.target.value)
          }
        />
      ),
    },
  ]

  function nextForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (step === formSteps.length - 1) return
    setStep((prev) => prev + 1)
  }

  function previousForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (step === 0) return
    setStep((prev) => prev - 1)
  }

  function submit(e: FormEvent) {
    e.preventDefault()
    getResults({
      industry: industryValue,
      sector: sectorValue,
      goal: primaryDeliverableValue,
      brief: briefValue,
      budget: budgetValue,
      projectStartDate: startDateValue,
      deadline: endDateValue,
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
          <Button {...{disabled}} onClick={previousForm}>
            Previous
          </Button>
        )}
        {step === 1 ? (
          <Button {...{disabled}} type="submit">
            Submit
          </Button>
        ) : (
          <Button {...{disabled}} onClick={nextForm}>
            Next
          </Button>
        )}
      </StyledFormActions>
    </StyledFormContainer>
  )
}
