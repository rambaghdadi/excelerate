import {styled} from "styled-components"

const StyledSelectInput = styled.select`
  padding: 0.5rem;
  border-radius: 7px;
`

interface ISelectInputProps extends React.HTMLProps<HTMLSelectElement> {
  options: string[]
}

export default function SelectInput({options, ...props}: ISelectInputProps) {
  return (
    <StyledSelectInput {...props}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </StyledSelectInput>
  )
}
