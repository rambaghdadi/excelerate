import {styled} from "styled-components"

const StyledQuestion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  & > label {
    font-size: 0.9rem;
    font-weight: 600;
  }
`

interface IFormQuestionProps {
  htmlFor: string
  label: string
  children: React.ReactNode
}

export default function FormQuestion({
  label,
  children,
  htmlFor,
}: IFormQuestionProps) {
  return (
    <StyledQuestion>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </StyledQuestion>
  )
}
