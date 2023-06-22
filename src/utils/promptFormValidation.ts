import {IFormStepOneProps} from "@/components/promptPage/organisms/FormSteps/FormStepOne"

export function validateForm(formInputs: IFormStepOneProps) {
  for (let key in formInputs) {
    //@ts-ignore
    if (!formInputs[key]) throw new Error(`One or more fields are empty.`)
  }

  if (typeof Number(formInputs.budgetValue) !== "number")
    throw new Error("Budget needs to be a number.")

  if (Number(formInputs.budgetValue) < 1000)
    throw new Error("Budget needs to be more than 1000.")

  if (
    new Date(formInputs.startDateValue) <
    new Date(new Date().toISOString().split("T")[0])
  )
    throw new Error("Start date cannot be before than today.")
}
