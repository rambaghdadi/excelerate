import {styled} from "styled-components"

const StyledTextInput = styled.input`
  padding: 0.5rem;
`

interface IInputElementProps extends React.HTMLProps<HTMLInputElement> {}

export default function TextInput({...props}: IInputElementProps) {
  return <StyledTextInput {...props} />
}
