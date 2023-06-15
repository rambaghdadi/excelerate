import {styled} from "styled-components"

const StyledQuestion = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  gap: 0.4rem;

  & > label {
    font-size: 0.8rem;
    font-weight: 600;
  }
`

interface IFormQuestionProps {
  label: string
  children: React.ReactNode
}

export default function FormQuestion({label, children}: IFormQuestionProps) {
  return (
    <StyledQuestion>
      <label>{label}</label>
      {children}
    </StyledQuestion>
  )
}
