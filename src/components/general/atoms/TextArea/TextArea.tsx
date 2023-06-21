import {styled} from "styled-components"

const StyledTextArea = styled.textarea`
  padding: 0.5rem;
  min-height: 10rem;
  border-radius: 7px;
`

interface IInputElementProps extends React.HTMLProps<HTMLTextAreaElement> {}

export default function TextArea({...props}: IInputElementProps) {
  return <StyledTextArea {...props} />
}