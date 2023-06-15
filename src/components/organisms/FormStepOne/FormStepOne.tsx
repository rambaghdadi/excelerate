import SelectInput from "@/components/atoms/SelectInput/SelectInput"
import TextInput from "@/components/atoms/TextInput/TextInput"
import FormQuestion from "@/components/molecules/FormQuestion/FormQuestion"
import {currencies} from "@/lib/currencies"
import {industries} from "@/lib/industries"
import {sectors} from "@/lib/sectors"
import {styled} from "styled-components"

const StyledFormStepOne = styled.div`
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

interface IFormStepOneProps {
  industryValue: string
  sectorValue: string
  budgetValue: number
  currencyValue: string
  startDateValue: string
  endDateValue: string
  industryOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  sectorOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  budgetOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  currencyOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  startDateOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  endDateOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormStepOne({
  industryValue,
  sectorValue,
  budgetValue,
  currencyValue,
  endDateValue,
  startDateValue,
  industryOnChange,
  budgetOnChange,
  currencyOnChange,
  sectorOnChange,
  endDateOnChange,
  startDateOnChange,
}: IFormStepOneProps) {
  return (
    <StyledFormStepOne>
      <FormQuestion label="What industry will this project operate in?">
        <SelectInput
          value={industryValue}
          onChange={industryOnChange}
          options={industries}
        ></SelectInput>
      </FormQuestion>
      <FormQuestion label="What sector will this project operate in?">
        <SelectInput
          value={sectorValue}
          options={sectors}
          onChange={sectorOnChange}
        ></SelectInput>
      </FormQuestion>
      <FormQuestion label="In which currency is the project budget denominated?">
        <SelectInput
          value={currencyValue}
          options={currencies.map((currency) => currency.currency)}
          onChange={currencyOnChange}
        ></SelectInput>
      </FormQuestion>
      <FormQuestion label="What is the total budget of the project?">
        <TextInput
          value={budgetValue}
          onChange={budgetOnChange}
          type="number"
        />
      </FormQuestion>
      <FormQuestion label="What is the project's start date?">
        <TextInput
          value={startDateValue}
          onChange={startDateOnChange}
          type="date"
        />
      </FormQuestion>
      <FormQuestion label="What is the project's end date?">
        <TextInput
          value={endDateValue}
          onChange={endDateOnChange}
          type="date"
        />
      </FormQuestion>
    </StyledFormStepOne>
  )
}
