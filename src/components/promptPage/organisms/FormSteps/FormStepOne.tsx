import classes from "./FormSteps.module.css"
import SelectInput from "@/components/general/atoms/SelectInput/SelectInput"
import TextInput from "@/components/general/atoms/TextInput/TextInput"
import FormQuestion from "@/components/general/molecules/FormQuestion/FormQuestion"
import {currencies} from "@/lib/currencies"
import {industries} from "@/lib/industries"
import {sectors} from "@/lib/sectors"

export interface IFormStepOneProps {
  industryValue: string
  sectorValue: string
  budgetValue: number
  currencyValue: string
  startDateValue: string
  endDateValue: string
  onChange: (e: any) => void
}

export default function FormStepOne({
  industryValue,
  sectorValue,
  budgetValue,
  currencyValue,
  endDateValue,
  startDateValue,
  onChange,
}: IFormStepOneProps) {
  return (
    <div className={classes.container}>
      <FormQuestion
        htmlFor="industryValue"
        label="What industry will this project operate in?"
      >
        <SelectInput
          required
          id="industryValue"
          name="industryValue"
          value={industryValue}
          onChange={onChange}
          options={industries}
        ></SelectInput>
      </FormQuestion>
      <FormQuestion
        htmlFor="sectorValue"
        label="What sector will this project operate in?"
      >
        <SelectInput
          id="sectorValue"
          required
          name="sectorValue"
          value={sectorValue}
          options={sectors}
          onChange={onChange}
        ></SelectInput>
      </FormQuestion>
      <FormQuestion
        htmlFor="currencyValue"
        label="In which currency is the project budget denominated?"
      >
        <SelectInput
          required
          id="currencyValue"
          name="currencyValue"
          value={currencyValue}
          options={currencies.map((currency) => currency.currency)}
          onChange={onChange}
        ></SelectInput>
      </FormQuestion>
      <FormQuestion
        htmlFor="budgetValue"
        label="What is the total budget of the project?"
      >
        <TextInput
          id="budgetValue"
          required
          name="budgetValue"
          value={budgetValue}
          onChange={onChange}
          type="number"
        />
      </FormQuestion>
      <FormQuestion
        htmlFor="startDateValue"
        label="What is the project's start date?"
      >
        <TextInput
          id="startDateValue"
          name="startDateValue"
          value={startDateValue}
          onChange={onChange}
          type="date"
        />
      </FormQuestion>
      <FormQuestion
        htmlFor="endDateValue"
        label="What is the project's end date?"
      >
        <TextInput
          id="endDateValue"
          required
          name="endDateValue"
          value={endDateValue}
          onChange={onChange}
          type="date"
        />
      </FormQuestion>
    </div>
  )
}
